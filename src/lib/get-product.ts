"use server";

import { getProduct } from "@/server/queries";

export const getProductAction = (id: string) => {
  return getProduct(id);
};
