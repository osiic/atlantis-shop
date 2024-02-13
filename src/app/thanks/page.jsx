import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center pt-[30vh]'>
      <h1 className='text-5xl'>Thanks</h1>
      <Link href='/'>Go Back To Home</Link>
    </div>
  );
}
