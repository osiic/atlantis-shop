import { Dashboard } from '@/components/dashboard/dashboard';
import { getProdcts } from '@/lib/api';
import { nextAuthConfig } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

const dataProducts = await getProdcts();
const session = await getServerSession(nextAuthConfig);

export default function Page() {
  if (!session?.user?.name) {
    return notFound()
  }

  return <Dashboard session={session} dataProducts={dataProducts} />;
}
