import { Product } from "./product";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getProdcts() {
  return await prisma.product.findMany();
}

const dataProducts = await getProdcts();
export function Products() {
  return (
    <main className="m-auto flex flex-col justify-between max-w-5xl px-[7%] py-3">
      <h1>All Products</h1>
      <div className="grid grid-cols-3 gap-2">
        {dataProducts.map((item) => {
          return (
            <a
              href={`/products/${item?.id}`}
              className="border-2 border-zinc-800 p-1 rounded "
              key={item?.id}
            >
              <Product item={item} />
            </a>
          );
        })}
      </div>
    </main>
  );
}
