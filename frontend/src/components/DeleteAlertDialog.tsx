import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useProducts } from "@/hooks/useProducts";
// import { deleteProduct } from "@/services/productsService";
import type { ProductType } from "@/types";
import { Trash2 } from "lucide-react";

interface DeleteAlertDialogProps {
  product: ProductType;
}

const DeleteAlertDialog = ({ product }: DeleteAlertDialogProps) => {

  const { removeProduct } = useProducts();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Trash2 className="cursor-pointer" color="red" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Esta seguro que desea eliminar el producto {product.name}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Eliminará el producto
            permanentemente y sus datos de la base de datos.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => console.log("Se cancelo la eliminacion")}
          >
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              removeProduct(product.id);
            }}
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteAlertDialog;
