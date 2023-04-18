import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import CheckOut from "../../components/CheckOut";
import ProductCard from "../../components/ProductCard";
import SimpleContainer from "../../components/SimpleContainer";
import { productsActions } from "../../store/store";
import classes from "../../styles/Cart.module.css";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.products.cart);
  useEffect(() => {
    dispatch(productsActions.getTotalPrice());
  }, [cart]);
  const increaseProduct = (prdTitle) => {
    dispatch(productsActions.increaseProduct(prdTitle));
  };
  const decreaseProduct = (prdTitle) => {
    dispatch(productsActions.decreaseProduct(prdTitle));
  };
  const removerProduct = (prdTitle) => {
    dispatch(productsActions.removeFromCart(prdTitle));
  };

  return (
    <SimpleContainer>
      <div className={classes.cart}>
        <div className={classes.leftCol}>
          {cart.length === 0 ? (
            <h1>YOUR CART IS EMPTY</h1>
          ) : (
            cart.map((product, i) => {
              return (
                <CartItem
                  key={i}
                  title={product.title}
                  imgURL={product.image}
                  price={product.price}
                  quantity={product.quantity}
                  total={product.total}
                  remove={() => removerProduct(product.title)}
                  increase={() => increaseProduct(product.title)}
                  decrease={() => decreaseProduct(product.title)}
                />
              );
            })
          )}
        </div>
        <div className={classes.rightCol}>
          <CheckOut />
        </div>
      </div>
    </SimpleContainer>
  );
};

export default Cart;
