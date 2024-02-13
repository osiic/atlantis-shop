import { getProdct } from '@/lib/api';
import { notFound } from 'next/navigation';
import { ButtonBeli } from './beli';


export async function ProductPage({ productName }) {
  const product = await getProdct(productName);

  if (!product) {
    return notFound()
  }

  return (
    <>
      <section className='flex flex-col gap-4 h-[80vh] items-center justify-center'>
        <div className="">

          {JSON.stringify(product)}
        </div>

        <ButtonBeli item={product} />
      </section>
    </>
  );
}
