"use server";
import { AddForm } from "@/app/add-product/add-form";
import { addProduct } from "@/server/queries";

export const addProductAction = (formData: AddForm) => {
  const newData = { ...formData, price: formData.originalPrice };
  addProduct(newData);
};
