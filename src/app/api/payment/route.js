const midtransClient = require('midtrans-client');

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER,
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT,
});

export async function POST(request) {
  const { id, title, price } = await request.json();
  const d = new Date();
  const ms = d.getMilliseconds();
  const randomID = `${ms}_${id}_${title}_${price}`;

  const params = {
    transaction_details: {
      order_id: randomID,
      gross_amount: price,
    },
    item_details: [
      {
        id: randomID,
        price,
        quantity: 1,
        brand: 'Cemu',
        category: 'Nothing',
        merchant_name: 'Cemy',
        url: `${process.env.NEXT_PUBLIC_API}/product/${title}`,
        name: title,
      },
    ],
  };

  const token = await snap.createTransactionToken(params);

  return Response.json({ token });
}
