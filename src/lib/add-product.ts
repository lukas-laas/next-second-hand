"use server";
import { addProduct } from "@/server/queries";

export const addProductAction = (formData: any) => {
  const newData = { ...formData, price: formData.price };
  addProduct(newData);
};
