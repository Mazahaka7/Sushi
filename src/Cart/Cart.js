import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "m1", name: "Sushi", amount: 2, price: 10.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      <div>
        {cartItems}
        <div className={styles.total}>
          <span>Итого</span>
          <span>49.99</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button-alt"]} onClick={props.onCloseCart}>Закрыть</button>
          <button className={styles.button}>Заказать</button>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
