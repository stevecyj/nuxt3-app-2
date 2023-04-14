import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

// 文章目錄
const postDir = path.join(process.cwd(), 'content')

export default defineEventHandler((event) => {
  // 取得當前頁碼
  const query = getQuery(event)
  const page = Number(query.page)
  const size = Number(query.size)
  const fileNames = fs.readdirSync(postDir)
  const posts = fileNames.map((fileName) => {
    //   取得文件名作為文章標題
    const id = fileName.replace(/.md$/, '')

    // 取得文章標題和建立日期
    const fullPath = path.join(postDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterInfo = matter(fileContents)
    const fileInfo = fs.statSync(fullPath)

    return { id, title: matterInfo.data.title, date: fileInfo.ctime }
  })

  // 降序排列, 分頁
  const start = (page - 1) * size
  const end = start + size
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1)).slice(start, end)
})
