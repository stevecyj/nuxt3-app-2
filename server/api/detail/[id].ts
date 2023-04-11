import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

//文章目錄
const postDir = path.join(process.cwd(), 'content');

export default defineEventHandler(async (event) => {
  const fileName = getRouterParam(event, 'id') + '.md';

  return { fileName };
});
