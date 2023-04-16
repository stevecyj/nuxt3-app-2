import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 查询所有用户
  const allUsers = await prisma.user.findMany()

  console.log(allUsers)
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
