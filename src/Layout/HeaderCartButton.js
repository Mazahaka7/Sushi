import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonAnimated, setButtonAnimated] = useState(false);
  const cartContext = useContext(CartContext);
  const cartItemAmount = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${buttonAnimated ? styles.bump : ""}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setButtonAnimated(true);
    const timer = setTimeout(() => {
      setButtonAnimated(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart </span>
      <span className={styles.badge}>{cartItemAmount}</span>
    </button>
  );
};
export default HeaderCartButton;
