import { Dashboard } from '@/components/dashboard/dashboard';
import { getProdcts } from '@/lib/api';

// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic';
export default async function Page() {
  const dataProducts = await getProdcts();

  return <Dashboard dataProducts={dataProducts} />;
}
