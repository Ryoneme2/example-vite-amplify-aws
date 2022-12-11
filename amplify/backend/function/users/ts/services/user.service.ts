import * as P from '@prisma/client';

const prisma = new P.PrismaClient();

export const getList = async () => {
  const users = await prisma.users.findMany()
  return users
}