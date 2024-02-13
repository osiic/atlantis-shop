'use client';

import { useEffect } from 'react';

export function ButtonBeli({ item }) {
  useEffect(() => {
    const scriptMid = document.createElement('script');
    scriptMid.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
    scriptMid.setAttribute(
      'data-client-key',
      process.env.NEXT_PUBLIC_MIDTRANS_CLIENT
    );
    scriptMid.async = true;

    document.body.appendChild(scriptMid);

    return () => {
      document.body.removeChild(scriptMid);
    };
  }, []);

  async function checkout() {
    const itemReq = {
      id: item.id,
      title: item.title,
      price: item.price,
    };

    const req = await fetch('/api/payment', {
      method: 'POST',
      body: JSON.stringify(itemReq),
    });

    const reqData = await req.json();
    console.log(reqData);

    window.snap.pay(reqData.token);
  }

  return (
    <>
      <button
        className='rounded border-2 border-zinc-950 bg-gray-950 px-5 py-1 text-xs text-white'
        type='button'
        onClick={checkout}
      >
        Beli
      </button>
    </>
  );
}
