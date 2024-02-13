import { actionDelete } from '@/lib/action';
import Image from 'next/image';
import Link from 'next/link';
import { FiTrash2 } from 'react-icons/fi';

export function Product({ item, title = 'Buy', onClick, deleteForm = false }) {
  return (
    <div className='flex'>
      <Image
        src={`/${item?.image}.jpg`}
        className='flex aspect-square w-5/12 items-center justify-center rounded border-2 border-zinc-950 text-sm text-gray-500'
        alt='Picture'
        width='100'
        height='100'
      />
      <div className='flex w-full flex-col justify-between rounded p-1 px-2'>
        <div className='flex justify-between'>
          <h2>{item?.title}</h2>
          {deleteForm && (
            <form action={actionDelete}>
              <input type='hidden' name='id' defaultValue={item?.id} id='id' />

              <button type='submit' className='button mt-2 text-sm'>
                <FiTrash2 />
              </button>
            </form>
          )}
        </div>
        <span className='-mt-1 text-xs text-gray-800 '>Rp{item?.price}</span>
        {title === 'Buy' ? (
          <Link
            href={`/product/${item?.title}`}
            type='button'
            className=' mt-2 rounded bg-gray-950 text-center text-sm text-white'
          >
            {title}
          </Link>
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
