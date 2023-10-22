import { useEffect, useState } from "react";
import Card from ".././UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./MealList.module.css";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-jokes-b425b-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Smth bad happend");
      }
      const responseData = await response.json();
      console.log(responseData);

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      console.log(loadedMeals);
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((err) => {
      setIsLoading(false);
      setErrorMessage(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.loading_section}>
        <p>Loading data</p>
      </section>
    );
  }
  if (errorMessage) {
    return (
      <section className={styles.error_section}>
        <p>{errorMessage}</p>
      </section>
    );
  }

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
