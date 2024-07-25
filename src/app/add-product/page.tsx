import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AddForm from "./add-form";

export default function AddProductPage() {
  return (
    <Card className="w-full max-w-80">
      <CardHeader>
        <h1>Add Product</h1>
      </CardHeader>
      <CardContent>
        <AddForm />
      </CardContent>
    </Card>
  );
}
