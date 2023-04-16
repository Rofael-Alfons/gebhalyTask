import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store/store";
import classes from "../styles/checkout.module.css";
const CheckOut = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state: any) => state.products.totalPrice);
  console.log(totalPrice);
  return (
    <div className={classes.checkout}>
      <h2>Total Cost : {totalPrice}$</h2>
      <button className={classes.button}>CHECKOUT</button>
    </div>
  );
};

export default CheckOut;
