import { Products } from '../item/products';

export function Home({ dataProducts }) {
  return (
    <>
      <main className='m-auto flex max-w-5xl flex-col justify-between px-[7%] py-3'>
        <Products dataProducts={dataProducts} />
      </main>
    </>
  );
}
