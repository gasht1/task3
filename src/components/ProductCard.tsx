import { IProducts } from "@/app/product";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  product: IProducts;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Image
        height={500}
        width={500}
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-2 text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.brand}</p>
      <p className="text-green-500">${product.price}</p>
    </div>
  );
};

export default ProductCard;
