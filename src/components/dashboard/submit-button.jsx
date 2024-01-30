'use client';
import { useFormStatus } from 'react-dom';

export function SubmitButton({ title, closeForm }) {
  const { pending } = useFormStatus();

  setTimeout(() => {
    if (pending) {
      closeForm('hidden');
      setTimeout(() => {
        closeForm();
      }, 2000);
    }
  }, 500);

  return (
    <div className='mt-3 w-full'>
      <button
        aria-disabled={pending}
        type='submit'
        className='w-full rounded border-2 border-zinc-950 bg-gray-950 px-5 py-1 text-xs text-white'
      >
        {pending ? 'Uploading..' : title}
      </button>
    </div>
  );
}
