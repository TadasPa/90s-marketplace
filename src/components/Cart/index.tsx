import React, { FC, useCallback } from "react";
import ICartProduct from "../../types/cartProduct";

interface ICart {
  products: ICartProduct[];
  onRemove: (product: ICartProduct) => void;
}

const Cart: FC<ICart> = ({ products = [], onRemove }) => {
  const getItems = useCallback(
    () =>
      products.map((product) => {
        const handleRemove = () => onRemove(product);
        return (
          <li key={product.id}>
            <span>{product.title}</span>
            <span> Amount: {product.amount}</span>
            <button onClick={handleRemove}>x</button>
          </li>
        );
      }),
    [products, onRemove]
  );

  return <ul>{getItems()}</ul>;
};

export default Cart;
