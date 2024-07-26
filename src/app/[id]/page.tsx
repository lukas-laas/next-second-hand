import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProductAction } from "@/lib/get-product";
import Link from "next/link";

export default async function ProductDetailPage({
  params: { id: productId },
}: any) {
  const product = await getProductAction(productId);
  if (!product) {
    return "Not found.";
  }
  return (
    <Card className="w-full max-w-80 h-60">
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Category: </strong>
          {product.category}
        </p>
        <p>
          <strong>Condition: </strong>
          {product.condition}
        </p>
        <p>
          <strong>Price: </strong>
          {product.price} sek
        </p>
        <p>
          <strong>Original price: </strong>
          {product.originalPrice} sek
        </p>
      </CardContent>
      <CardFooter>
        <Button className="rounded-md bg-rose-600 hover:bg-rose-400 p-2 transition-colors text-white">
          <Link href={"/"}>Back</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
