import { PrismaClient } from '@prisma/client';

import { USER_MOCK_SAMPLE_02 } from './mock/user';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  for (const u of USER_MOCK_SAMPLE_02) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
