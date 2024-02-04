import { Home } from '@/components/home/home';
import { getProdcts } from '@/lib/api';

const dataProducts = await getProdcts();
export default function Page() {
  return <Home dataProducts={dataProducts} />;
}
