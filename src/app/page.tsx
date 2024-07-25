import { getProducts } from "@/server/queries";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

export default async function Home() {
  const products = await getProducts();
  return (
    <main>
      <h1>Products</h1>
      <DataTable columns={columns} data={products} />
    </main>
  );
}
