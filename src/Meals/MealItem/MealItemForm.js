import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();
    const inputAmount = amountInputRef.current.value;

    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(+inputAmount);
  };

  return (
    <form className={styles.form} onSubmit={SubmitHandler}>
      <Input
        label="Количество"
        ref={amountInputRef}
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Добавить</button>
      {!isAmountValid && <p>Пожалуйста введите количество равное от 1 до 10</p>}
    </form>
  );
};
export default MealItemForm;
