import React, { FC, useCallback } from "react";
import IProduct from "../../types/product";

interface IProductDetails {
  product: IProduct;
  onAdd: (product: IProduct) => void;
}

const Product: FC<IProductDetails> = ({ product, onAdd }) => {
  const { title, price, img } = product;
  const handleAdd = useCallback(() => onAdd(product), [product, onAdd]);

  return (
    <div>
      <h1>{title}</h1>
      <p>Price: {price}</p>

      <button
        data-testid={`product-add-to-cart-${product.id}-testid`}
        onClick={handleAdd}
      >
        Add to cart
      </button>

      <div>
        <img src={img} alt={title} width={640} />
      </div>
    </div>
  );
};

export default Product;
