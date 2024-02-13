'use client';

import { useState } from 'react';
import { Products } from '../item/products';
import { Form } from './form';
import Link from 'next/link';

export function Dashboard({ dataProducts }) {
  const [form, setForm] = useState({});

  function openForm(title, data) {
    setForm({
      title,
      status: true,
      data,
    });
  }

  return (
    <>
      <Form
        status={form?.status}
        title={form?.title}
        setForm={setForm}
        data={form?.data}
      />
      <main className='m-auto flex max-w-5xl flex-col justify-between gap-3 px-[7%] py-3'>
        <div className='jitems-center flex justify-between'>
          <Link href='/' className='text-xl font-medium '>Dashboard</Link>
          <button
            type='button'
            onClick={() => {
              openForm();
            }}
            className='rounded border-2 border-zinc-950 bg-gray-950 px-5 py-1 text-xs text-white'
          >
            Create
          </button>
        </div>
        <Products
          onClick={(item) => {
            openForm('Edit', item);
          }}
          dataProducts={dataProducts}
          title='Edit'
          deleteForm={true}
        />
      </main>
    </>
  );
}
