import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { ProductType } from "@/types";
import { Badge } from "./ui/badge";

interface CardProductProps {
  product: ProductType;
}

const CardProduct = ( { product }: CardProductProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex gap-5 justify-between">
        <p className="font-bold">${product.price}</p>
        <Badge variant={product.is_available ? "success" : "destructive"}>{product.is_available ? "Disponible" : "Sin Stock"}</Badge>
      </CardFooter>
    </Card>
  );
};
export default CardProduct;
