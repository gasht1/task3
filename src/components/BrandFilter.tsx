import React from "react";

interface BrandFilterProps {
  brands: string[];
  onFilterChange: (brand: string) => void;
}

const BrandFilter: React.FC<BrandFilterProps> = ({
  brands,
  onFilterChange,
}) => {
  return (
    <div className="mb-4 bg-slate-100  rounded-md shadow-md">
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="border p-2 rounded-md  bg-slate-300"
      >
        <option value="">All Brands</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandFilter;
