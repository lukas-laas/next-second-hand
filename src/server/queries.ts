import "server-only";
import { db } from "./db";
type Product = {
  id: string;
  title: string;
  price: number;
  images?: string[];
  condition: string;
  age: number;
  category: string;
  initialPrice: number;
};

export const getProducts = async () => {
  try {
    const products = await db.query.Products.findMany();
    const productsDTO = products.map((product: Product) => {
      return { id: product.id, title: product.title, price: product.price };
    });
    return productsDTO;
  } catch (error) {
    throw new Error("Failed to fetch Products");
  }
};
