import Image from "next/image";
import { getProducts } from "./lib/actions";

export default async function Home() {
  const products = await getProducts();

  console.log(products);
  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <span>{product.title}: </span>
              <span>{product.price} sek</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
