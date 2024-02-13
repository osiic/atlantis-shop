import { ProductPage } from '@/components/product/product';

export const dynamic = 'force-dynamic';
export default function Page({ params }) {
  return (
    <>
      <ProductPage productName={params.slug} />
    </>
  );
}
