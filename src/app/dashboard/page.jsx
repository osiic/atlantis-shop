import { Dashboard } from '@/components/dashboard/dashboard';
import { getProdcts } from '@/lib/api';

const dataProducts = await getProdcts();
export default function Page() {
  return <Dashboard dataProducts={dataProducts} />;
}
