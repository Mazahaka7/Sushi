import meals from "./dummy-meals";
import Card from ".././UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./MealList.module.css";

console.log(meals);
const MealsList = () => {
  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default MealsList;
