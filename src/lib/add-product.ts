"use server";
import { AddForm } from "@/app/add-product/add-form";
import { addProduct } from "@/server/queries";

export const addProductAction = (formData: AddForm) => {
  const newPrice = Number(formData.originalPrice) * 0.9 ** formData.age;
  const newData = { ...formData, price: newPrice.toFixed(2) };
  addProduct(newData);
};
