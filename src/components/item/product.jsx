import Image from 'next/image';

export function Product({ item, title = 'Buy', onClick }) {
  return (
    <div className=' flex'>
      <Image
        src={`/${item}.jpg`}
        className='flex aspect-square w-5/12 items-center justify-center rounded border-2 border-zinc-950 text-sm text-gray-500'
        alt='Picture'
        width='100'
        height='100'
      />
      <div className='flex w-full flex-col justify-between rounded p-1 px-2'>
        <h2>{item?.title} </h2>
        <span className='-mt-1 text-xs text-gray-800 '>Rp{item?.price}</span>
        {title === 'Buy' ? (
          <button
            type='button'
            className='button mt-2 bg-gray-950 text-sm text-white'
          >
            {title}
          </button>
        ) : (
          <button
            type='button'
            onClick={() => {
              onClick(item);
            }}
            className='button mt-2 bg-gray-950 text-sm text-white'
          >
            {title}
          </button>
        )}
      </div>
    </div>
  );
}
