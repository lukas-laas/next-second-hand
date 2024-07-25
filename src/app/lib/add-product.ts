"use server";
import { addProduct } from "@/server/queries";

export const addProductAction = (formData: any) => {
  addProduct(formData);
};
