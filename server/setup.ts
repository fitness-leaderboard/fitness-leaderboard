import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { hashPassword } from './src/utils/encryption';

async function main() {
  const password = 'password';
  const hashedPassword = await hashPassword(password);

  await prisma.user.create({
    data: {
      email: 'user1@northeastern.edu',
      name: 'User 1',
      password: hashedPassword,
    },
  });

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
