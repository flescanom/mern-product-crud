import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ProductsProvider } from "./context/productsContext";

function App() {
  

  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProductsProvider>
  );
}

export default App;
