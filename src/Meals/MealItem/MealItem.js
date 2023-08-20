import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  let { id, name, description, price } = props;
  console.log(props);
  return (
    <li className={styles.meal}>
      <div>
        <h2>{name}</h2>
        <p className={styles.description}>{description}</p>
        <span className={styles.price}>{price}</span>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};
export default MealItem;
