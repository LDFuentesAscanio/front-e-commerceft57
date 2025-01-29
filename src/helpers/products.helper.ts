import { IProduct } from '@/Intefaces/IProduct';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB() {
  try {
    const response = await fetch(`${API_URL}/products`, {
      next: { revalidate: 1200 },
    });
    const products: IProduct[] = await response.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductsById(id: string) {
  try {
    const products: IProduct[] = await getProductsDB();
    const productFound = products.find(
      (product) => product.id.toString() === id
    );
    if (!productFound) {
      throw new Error('Product not available');
    }
    return productFound;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductsByCategoryId(categoryId: string) {
  try {
    const products: IProduct[] = await getProductsDB();
    const productsFiltered: IProduct[] = products.filter(
      (product) => product.categoryId.toString() === categoryId
    );
    return productsFiltered;
  } catch (error: any) {
    throw new Error(error);
  }
}
