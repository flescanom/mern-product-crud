import { useFilter } from "@/hooks/useFilters";
import { useId } from "react";

interface FiltersProductsProps {
  minPrice: number;
  maxPrice: number;
}

const FiltersProducts = ({ minPrice, maxPrice }: FiltersProductsProps) => {
  const { filters, setFilters } = useFilter();

  const priceFilterId = useId();
  const nameFilterId = useId();

  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      price: parseInt(event.target.value),
    }));
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  return (
    <section className="flex items-center gap-2">
      <div>
        <input
          className="border-2 rounded border-black px-1"
          type="text"
          id={nameFilterId}
          placeholder="Filtrar productos..."
          onChange={handleChangeName}
        />
      </div>
      <div>
        <input
          type="range"
          id={priceFilterId}
          min={minPrice}
          max={maxPrice}
          value={filters.price}
          placeholder=""
          onChange={handleChangeMinPrice}
        />
        <output>${filters.price}</output>
      </div>
    </section>
  );
};
export default FiltersProducts;
