import { getProducts } from "@/server/queries";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

export default async function Home() {
  return (
    <main className="px-4 max-w-3xl w-full">
      <h1>Products</h1>
      <DataTable />
    </main>
  );
}
