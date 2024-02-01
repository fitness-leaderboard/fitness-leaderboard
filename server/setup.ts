import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Use this to make dummy data. didn't make it for activities yet
  const allUsers = await prisma.user.findMany({
    include: {},
  });
  console.dir(allUsers, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
