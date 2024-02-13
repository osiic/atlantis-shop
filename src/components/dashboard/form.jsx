'use client'
import { FiXCircle } from 'react-icons/fi';
import { SubmitButton } from './submit-button';
import { actionCreate, actionUpdate } from '@/lib/action';

export function Form({ title = 'Create', status = false, setForm, data }) {
  function closeForm(kondisi = false) {
    setForm({ status: kondisi });
  }

  if (!status) return;
  return (
    <div
      className={` ${status === 'hidden' && status} fixed bottom-0 left-0 right-0 top-0 bg-zinc-800/50`}
    >
      <div className='flex h-screen w-screen items-center justify-center '>
        <form
          action={title === 'Create' ? actionCreate : actionUpdate}
          className='flex w-4/12 flex-col gap-1 rounded-md bg-white px-5 py-3'
        >
          <input type='hidden' name='id' id='id' defaultValue={data?.id} />
          <div className='mb-1 flex justify-between'>
            <h2>{title}</h2>

            <button
              onClick={() => {
                closeForm();
              }}
              type='button'
            >
              <FiXCircle />
            </button>
          </div>
          <div className='flex w-full flex-col'>
            <label
              htmlFor='title'
              className='text-sm font-medium leading-6 text-gray-900'
            >
              Title
            </label>
            <input
              defaultValue={data?.title}
              id='title'
              type='text'
              required
              name='title'
              placeholder='Jukut...'
              className='rounded-sm px-2 py-1.5 text-sm font-light text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 '
            />
          </div>
          <div className='flex w-full flex-col'>
            <label
              htmlFor='price'
              className='text-sm font-medium leading-6 text-gray-900'
            >
              Price
            </label>
            <input
              defaultValue={data?.price}
              id='price'
              type='number'
              required
              name='price'
              placeholder='321...'
              className='rounded-sm px-2 py-1.5 text-sm font-light text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 '
            />
          </div>
          <div className='flex w-full flex-col'>
            <label
              htmlFor='image'
              className='text-sm font-medium leading-6 text-gray-900'
            >
              Image
            </label>
            <input
              defaultValue={data?.image}
              id='image'
              type='text'
              name='image'
              placeholder='https://media.discordapp.net/attachments/...'
              className='rounded-sm px-2 py-1.5 text-sm font-light text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 '
            />
          </div>
          <SubmitButton title={title} closeForm={closeForm} />
        </form>
      </div>
    </div>
  );
}
