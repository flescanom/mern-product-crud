import TableProducts from "@/components/TableProducts";
import { FilterProvider } from "@/context/FilterContext";
import { useProducts } from "@/hooks/useProducts";
import { useEffect } from "react";

const Home = () => {
  const { products, loadProducts } = useProducts();

  useEffect(() => {
    loadProducts();
    console.log("Se llamo a loadProducts en useEffect de Home");
  }, []);

  return (
    <FilterProvider>
      <div>
        <header className="p-2 bg-amber-50">
          <div className="text-2xl font-semibold">
            Aplicacion para gestion de productos
          </div>
        </header>
        <main className="flex flex-col gap-10 min-h-svh p-5">
          {products.length != 0 ? (
            <>
              <div className="mb-5">
                <div className="flex justify-between items-center">
                  <h2 className="mb-2">Listado de productos</h2>
                </div>
                <hr />
              </div>
              <TableProducts products={products} />
            </>
          ) : (
            <p>No se encontraron productos</p>
          )}
        </main>
      </div>
    </FilterProvider>
    
  )
      
};
export default Home;
