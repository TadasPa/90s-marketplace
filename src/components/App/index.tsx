import { useCallback, useState } from 'react';
import Product from '../../components/Product';
import Cart from '../../components/Cart';
import { addProduct, getProducts, removeProduct } from '../../storage/productStorage';
import { IProduct } from '../../types/product';
import ICartProduct from '../../types/cartProduct';
import { PRODUCT_A, PRODUCT_B } from '../../data/products';

export const App = () => {
  const [cartItems, setCartItems] = useState<ICartProduct[]>(getProducts());
  const totalAmount = cartItems.reduce((total, item) => total += item.amount, 0);
  const handleAdd = useCallback((product: IProduct) => {
    addProduct(product);
    setCartItems(getProducts());
  }, [setCartItems]);

  const handleRemove = useCallback((product: IProduct) => {
    removeProduct(product);
    setCartItems(getProducts());
  }, [setCartItems]);

  return (
    <main>
      <header>
        90s shop
        <nav>
          <ul style={{listStyleType: 'none', display: 'flex'}}>
            <li><a href="/">Home</a></li>
            |
            <li><a href="/cart">Cart ({totalAmount})</a></li>
          </ul>
        </nav>
        <hr/>
      </header>

      {
        window.location.pathname === '/' && (
          <div>
            Welcome to our shop!

            <p>
              You are probably interested in <a href={`/products/${PRODUCT_A.id}`}>{ PRODUCT_A.title}</a>.
            </p>

            <p>
              Check out the newest product <a href={`/products/${PRODUCT_B.id}`}>{ PRODUCT_B.title}</a>!
            </p>
          </div>
        )
      }
      {
        window.location.pathname === `/products/${PRODUCT_A.id}` && (
          <Product product={PRODUCT_A} onAdd={handleAdd} />
        )
      }
      {
        window.location.pathname === `/products/${PRODUCT_B.id}` && (
          <Product product={PRODUCT_B} onAdd={handleAdd} />
        )
      }
      {
        window.location.pathname === '/cart' && (
          <Cart products={cartItems} onRemove={handleRemove} />
        )
      }
    </main>
  );
}

export default App;
