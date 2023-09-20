import { useContext } from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const cartIsNotEmpty = cartContext.items.length > 0;

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addCartItemHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      <div>
        {cartItems}
        <div className={styles.total}>
          <span>Итого</span>
          <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button-alt"]} onClick={props.onCloseCart}>
            Закрыть
          </button>
          {cartIsNotEmpty && (
            <button className={styles.button}>Заказать</button>
          )}
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
