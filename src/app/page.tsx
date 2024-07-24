import { getProducts } from "@/server/queries";

export default async function Home() {
  const products = await getProducts();
  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map(
          (product: { id: string; title: string; price: number }) => {
            return (
              <li key={product.id}>
                <span>{product.title}: </span>
                <span>{product.price} sek</span>
              </li>
            );
          },
        )}
      </ul>
    </main>
  );
}
