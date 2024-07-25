import "server-only";
import { db } from "./db";
import { Products } from "./db/schema";
import { AddForm } from "@/app/add-product/add-form";

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

type NewProduct = typeof Products.$inferInsert;
export const addProduct = async (formData: NewProduct) => {
  try {
    console.log("call db");
    await db.insert(Products).values(formData);
    console.log(formData);
  } catch (error) {
    throw new Error("Failed to add product");
  }
};
