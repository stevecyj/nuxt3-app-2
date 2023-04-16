import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // insert data
  // await prisma.user.create({
  //   data: {
  //     name: 'JOJO',
  //     email: 'jojo@qq.com',
  //     posts: {
  //       create: {
  //         title: '10速通下一代ORM解決方案：Prisma',
  //       },
  //     },
  //   },
  // })
  // 查询所有用户
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })

  console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
