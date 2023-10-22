import React from "react";
import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import SubmitOrder from "../Meals/SubmitOrder";

const Cart = (props) => {
  const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);
  const [isDataSubmitting, setIsDataSubmitting] = useState(false);
  const [wasDataSendingSuccessful, setWasDataSendingSuccessful] =
    useState(false);

  const cartContext = useContext(CartContext);
  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const cartIsNotEmpty = cartContext.items.length > 0;

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };
  const submitOrderAvailableHandler = () => {
    setIsSubmitOrderAvailable(true);
  };
  const submitOrderHandler = async (userData) => {
    setIsDataSubmitting(true);
    await fetch(
      "https://react-jokes-b425b-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedMeals: cartContext.items,
        }),
      }
    );
    setIsDataSubmitting(false);
    setWasDataSendingSuccessful(true);
    cartContext.clearCart();
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

  const modalButton = (
    <div className={styles.actions}>
      <button className={styles["button-alt"]} onClick={props.onCloseCart}>
        Закрыть
      </button>
      {cartIsNotEmpty && (
        <button className={styles.button} onClick={submitOrderAvailableHandler}>
          Заказать
        </button>
      )}
    </div>
  );
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      {isSubmitOrderAvailable && (
        <SubmitOrder
          onSubmit={submitOrderHandler}
          onCancel={props.onCloseCart}
        />
      )}
      {!isSubmitOrderAvailable && modalButton}
    </React.Fragment>
  );
  const dataSubmittingCartModal = <p>Data is sending...</p>;
  const dataWasSubmittedCartModal = (
    <React.Fragment>
      <p>Your order was successfully send</p>
      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={props.onCloseCart}>
          Закрыть
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {!isDataSubmitting && !wasDataSendingSuccessful && cartModalContent}
      {isDataSubmitting && dataSubmittingCartModal}
      {wasDataSendingSuccessful && dataWasSubmittedCartModal}
    </Modal>
  );
};
export default Cart;
