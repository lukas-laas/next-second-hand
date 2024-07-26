"use server";

import { getProducts } from "@/server/queries";

export const getProductsAction = () => {
  const products = getProducts();
  return products;
};
