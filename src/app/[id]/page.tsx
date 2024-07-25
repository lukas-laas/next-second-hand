import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProductAction } from "@/lib/get-product";

export default async function ProductDetailPage({
  params: { id: productId },
}: any) {
  const product = await getProductAction(productId);
  if (!product) {
    return "Loading product";
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p>{product.price}</p>
        <p>{product.originalPrice}</p>
        <p>{product.condition}</p>
        <p>{product.category}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
