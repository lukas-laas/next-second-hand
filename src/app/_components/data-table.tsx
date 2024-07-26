import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getProducts } from "@/server/queries";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function DataTable() {
  const headers = [
    { id: "product", title: "Product" },
    { id: "price", title: "Price" },
  ];

  const products = await getProducts();
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header) => {
              return <TableHead key={header.id}>{header.title}</TableHead>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length ? (
            products.map((product: any) => (
              <TableRow className="cursor-pointer" key={product.id}>
                <Link
                  href={`/${product.id}`}
                  className="w-full flex justify-between"
                >
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{product.price} sek</TableCell>
                </Link>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
