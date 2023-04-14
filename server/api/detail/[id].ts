import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// 文章目錄
const postDir = path.join(process.cwd(), 'content')

export default defineEventHandler(async (event) => {
  const fileName = `${getRouterParam(event, 'id')}.md`

  // 取得文章內容
  const fullPath = path.join(postDir, fileName)

  // 讀取文章之前做錯誤處理
  try {
    fs.accessSync(fullPath)

    const fileContent = fs.readFileSync(fullPath, 'utf-8')

    // 從文章內容解析頁面資訊
    const matterInfo = matter(fileContent)

    // markdown to html
    const processedContent = await remark()
      .use(html)
      .process(matterInfo.content)
    const content = processedContent.toString()

    return { title: matterInfo.data.title, content }
  }
  catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'article does not exist',
      message: '文章不存在',
    })
  }
})
