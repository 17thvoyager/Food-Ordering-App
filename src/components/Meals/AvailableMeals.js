import React from "react";
import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card.js";
import MealItem from "../Meals/MealItem/MealItem.js";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
        const response = await fetch(
          "https://react-http-8cc39-default-rtdb.firebaseio.com/meals.json"
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch meals.");
        }
      
        const responseData = await response.json();
        
        const loadedMeals = [];

        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
        
        setMeals(loadedMeals);
    }
    
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if(isLoading ) {
    return(
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if(httpError) {
    return(
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
