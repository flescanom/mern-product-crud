import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
//   DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// import { useProducts } from "@/hooks/useProducts";

import { Plus } from 'lucide-react';

import { CreateProductForm } from "./CreateProductForm";

// import type { ProductType } from "@/types";

const CreateEditAlertDialog = () => {

//   const { addProduct } = useProducts();

//   const handleCreateEditProduct = () => {
    
//     const newProduct: ProductType = {
//       id: 6,
//       name: "Nuevo producto 6",
//       description: "Descripcion del nuevo producto",
//       price: 50,
//       is_available: true,
//     };

//     addProduct(newProduct);
//   }

  return (
     <Dialog>
      <DialogTrigger asChild>
        <Button >
            <Plus className="cursor-pointer" color="white" />
            Crear producto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" onInteractOutside={(e) => {
          e.preventDefault();
        }}>
        <DialogHeader>
          <DialogTitle>Nuevo producto</DialogTitle>
          <DialogDescription>
            Ingresa la informacion del nuevo producto a continuacion.
          </DialogDescription>
        </DialogHeader>
        <div >
         <CreateProductForm />
        </div>
        {/* <DialogFooter>
          <Button type="submit" onClick={handleCreateEditProduct}>Crear</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};
export default CreateEditAlertDialog;
