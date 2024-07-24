import "server-only";
import { db } from "./db";

export const getProducts = async () => {
  try {
    const products = await db.query.Products.findMany();
    const productsDTO = products.map((product) => {
      return { id: product.id, title: product.title, price: product.price };
    });
    return productsDTO;
  } catch (error) {
    throw new Error("Failed to fetch Products");
  }
};
