import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  console.log(props);
  const formattedPrice = `$${props.price.toFixed(2)}`;

  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h2>{props.name}</h2>
        <p className={styles.description}>{props.description}</p>
        <span className={styles.price}>{formattedPrice}</span>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};
export default MealItem;
