import React from "react";
import Button from "./Button";

type ProductCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-80 flex flex-col">
      <img 
        src={imageUrl}
        alt={title}
        className="box-border size-10 w-full h-48 object-cover "
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2 flex-grow">{description}</p>
        <div className="mt-4">
          <p className="text-gray-900 font-bold">${price.toFixed(2)}</p>
        </div>
        <div className="mt-4">
          <Button variant="primary" size="md" onClick={onAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
