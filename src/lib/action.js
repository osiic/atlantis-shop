'use server';

import { redirect } from 'next/navigation';
import { createProduct, deleteProduct, updateProduct } from './api';
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

export async function actionUpdate(formData) {
  const rawFormData = {
    title: formData.get('title'),
    price: +formData.get('price'),
    image: formData.get('image'),
  };

  const idFormData = +formData.get('id');

  return await updateProduct(rawFormData, idFormData).then(() => {
    revalidatePath('/dashboard');
    redirect('/dashboard');
  });
}

export async function actionDelete(formData) {
  const idFormData = +formData.get('id');

  return await deleteProduct(idFormData).then(() => {
    revalidatePath('/dashboard');
    redirect('/dashboard');
  });
}
