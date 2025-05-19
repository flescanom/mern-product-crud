import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ProductType } from "@/types";

import { Pencil } from "lucide-react";
import FiltersProducts from "./FiltersProducts";
import DeleteAlertDialog from "./DeleteAlertDialog";
import { useFilter } from "@/hooks/useFilters";
import CreateEditAlertDialog from "./CreateEditAlertDialog";

interface ProductProps {
  products: ProductType[];
}

const TableProducts = ({ products }: ProductProps) => {
  const { filtersProducts } = useFilter();

  const sortedProducts = products.sort((a, b) => {
    return b.price - a.price;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <FiltersProducts
          minPrice={sortedProducts[products.length - 1].price}
          maxPrice={sortedProducts[0].price}
        />
        <CreateEditAlertDialog />
      </div>
      <Table>
        <TableCaption>Listado de productos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Nombre</TableHead>
            <TableHead>Disponibilidad</TableHead>
            <TableHead>Descripcion</TableHead>
            <TableHead className="text-right">Precio</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtersProducts(products).map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>
                {product.is_available ? "Hay stock" : "No hay stock"}
              </TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="text-right">${product.price}</TableCell>
              <TableCell className="text-right">
                <div className="flex gap-2">
                  <DeleteAlertDialog product={product} />
                  <Pencil
                    className="cursor-pointer"
                    color="blue"
                    onClick={() => {
                      console.log("Se presiono el boton de editar");
                    }}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default TableProducts;
