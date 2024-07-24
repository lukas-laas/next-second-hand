import Image from "next/image";
import { getProducts } from "./lib/actions";

export default async function Home() {
  const products = await getProducts();
  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          return (
            <li>
              <span>{product.title}: </span>
              <span>{product.price} sek</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
