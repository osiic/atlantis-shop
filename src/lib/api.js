import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getProdcts() {
  return await prisma.product.findMany();
}

export async function createProduct(data) {
  return await prisma.product.create({ data });
}

export async function updateProduct(data, id) {
  return await prisma.product.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteProduct(id) {
  return await prisma.product.delete({
    where: {
      id
    }
  })
}

export async function getProdct(title) {
  return await prisma.product.findFirst({
    where: {
      title
    }
  })
} 
