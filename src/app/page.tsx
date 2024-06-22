"use client";

import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";
import BrandFilter from "@/components/BrandFilter";
import { IProducts } from "./product";

const products: IProducts[] = [
  {
    id: 1,
    name: "iPhone 13",
    brand: "Apple",
    price: 999,
    image: "/images/iphone13.webp",
  },
  {
    id: 2,
    name: "Galaxy S21",
    brand: "Samsung",
    price: 799,
    image: "/images/Galaxy S21.jpg",
  },
  {
    id: 3,
    name: "Pixel 6",
    brand: "Tecno",
    price: 599,
    image: "/images/iPhone 13.jpg ",
  },
];

const HomePage = () => {
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);
  const [brands, setBrands] = useState(["Tecno", "Samsung"]);

  const handleFilterChange = (brand: string) => {
    if (brand === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.brand === brand)
      );
    }
  };

  return (
    <div className="container mx-auto px-4">
      <BrandFilter brands={brands} onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
