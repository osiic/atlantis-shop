import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getProdcts() {
  try {
    const products = await prisma.product.findMany();
    console.log(products);
    return products;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
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
      id,
    },
  });
}

export async function getProdct(title) {
  return await prisma.product.findFirst({
    where: {
      title,
    },
  });
}
