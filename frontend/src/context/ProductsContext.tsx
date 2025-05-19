import { deleteProduct, getProducts } from "@/services/productsService";
import type { ProductType } from "@/types";
import { createContext, useState } from "react";

interface ProductsContextType {
  products: ProductType[];
  loadProducts: () => Promise<void>;
  addProduct: (product: ProductType) => void;
  removeProduct: (productId: number) => void;
  updateProduct: (updatedProduct: ProductType) => void;
}

interface ProductsProviderProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  loadProducts: async () => {},
  addProduct: () => {},
  removeProduct: () => {},
  updateProduct: () => {},
});

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const loadProducts = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  const addProduct = (newProduct: ProductType) => {
    
    //  Check if the product already exists
    const productExists = products.some((p) => p.id === newProduct.id);

    if (!productExists) {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }    
  };

  const removeProduct = async (productId: number) => {
    try {
      const response = await deleteProduct(productId);

      if (response.ok === true) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const updateProduct = (updatedProduct: ProductType) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        loadProducts,
        addProduct,
        removeProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
