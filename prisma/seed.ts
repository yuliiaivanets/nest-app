import * as dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const DB_CONNECTION_STRING = process.env.DATABASE_URL;

const adapter = new PrismaPg({
  connectionString: DB_CONNECTION_STRING,
});
const prisma = new PrismaClient({ adapter });

async function main() {
// check veriable
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !DB_CONNECTION_STRING) {
    throw new Error(
      'Please chesk env vars: ADMIN_EMAIL, ADMIN_PASSWORD, DATABASE_URL',
    );
  }
  // seed admin
  const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10);
  const admin = await prisma.user.upsert({
    where: { email: ADMIN_EMAIL },
    update: { password: hashed },
    create: { email: ADMIN_EMAIL, password: hashed, role: 'ADMIN' },
  });
  console.log(`Admin seeded: id: ${admin.id} `);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
