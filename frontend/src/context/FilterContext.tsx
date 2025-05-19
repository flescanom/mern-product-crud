import { createContext, useState } from "react";

export type FilterContextType = {
  filters: {
    price: number;
    name: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      price: number;
      name: string;
    }>
  >;
};

interface FilterProviderProps {
  children: React.ReactNode;
}

export const FilterContext = createContext<FilterContextType>({
  filters: {
    price: 0,
    name: "",
  },
  setFilters: () => {},
});

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filters, setFilters] = useState({
    price: 50,
    name: "",
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
