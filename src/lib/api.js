import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getProdcts() {
  return await prisma.product.findMany();
}

export async function createProduct(data) {
  return await prisma.product.create({ data });
}

export async function updateProduct(data) {
  return await prisma.product.update({
    where: {
      id: data.id,
    },
    data,
  });
}
