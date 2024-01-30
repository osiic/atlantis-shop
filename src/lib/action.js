'use server';

import { redirect } from 'next/navigation';
import { createProduct } from './api';
import { revalidatePath } from 'next/cache';

export async function actionCreate(formData) {
  const rawFormData = {
    title: formData.get('title'),
    price: +formData.get('price'),
    image: formData.get('image'),
  };

  return await createProduct(rawFormData).then(() => {
    revalidatePath('/dashboard');
    redirect('/dashboard');
  });
}
