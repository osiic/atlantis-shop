import { Product } from './product';

export function Products({ dataProducts, onClick, title }) {
  return (
    <div className='grid grid-cols-3 gap-2'>
      {dataProducts.map((item) => {
        return (
          <div className='rounded border-2 border-zinc-800 p-1 ' key={item?.id}>
            <Product item={item} title={title} onClick={onClick} />
          </div>
        );
      })}
    </div>
  );
}
