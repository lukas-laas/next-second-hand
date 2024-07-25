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
  const { title, originalPrice, age, price } = formData;
  // try {
  //   console.log("call db");
  //   await db.insert(Products).values({
  //     title: title,
  //     age: age,
  //     originalPrice: originalPrice,
  //     price: originalPrice,
  //   });
  //   console.log(formData);
  // } catch (error) {
  //   throw new Error("Failed to add product");
  // }
  const inserProduct = async (product: NewProduct) => {
    return db.insert(Products).values(product);
  };

  const newProduct: NewProduct = {
    title: "title",
    age: 2,
    originalPrice: "2",
    price: "2",
  };
  await inserProduct(newProduct);
};
