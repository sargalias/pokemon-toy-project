import { PrismaClient } from '@prisma/client';

// We could await for the connection to be established here.
// But we're not in this case because it changes the structure
// of application setup and it's not worth the effort in a
// coding test.

const prisma = new PrismaClient();

export default prisma;
