import { FilterContext } from "@/context/FilterContext";
import type { ProductType } from "@/types";
import { useContext } from "react";

export const useFilter = () => {
  const { filters, setFilters } = useContext(FilterContext);
  
  if (!filters || !setFilters) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  const filtersProducts = (products: ProductType[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.price &&
        (filters.name === "" ||
          product.name.toLowerCase().includes(filters.name.toLowerCase()))
      );
    });
  };

  return { filters, setFilters, filtersProducts }
};
