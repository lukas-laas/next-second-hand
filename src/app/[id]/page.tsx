import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProductAction } from "@/lib/get-product";

export default async function ProductDetailPage({
  params: { id: productId },
}: any) {
  const product = await getProductAction(productId);
  if (!product) {
    return "Loading product";
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
    </Card>
  );
}
