import React from 'react';
import { useEffect,useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card.js';
import MealItem from '../Meals/MealItem/MealItem.js';

const AvailableMeals = () => { 

  const [meals, setMeals] = useState([]);

 useEffect(() => {
  const fetchMeals = async () => {
    const response = await fetch('https://react-http-8cc39-default-rtdb.firebaseio.com/meals.json');
    const responseData = await response.json();

    const loadedMeals = [];

    for( const key in responseData ){
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      })
    }

    setMeals(loadedMeals);
  };

  fetchMeals();
 }
 
 , []);


  const mealsList = meals.map((meals) => (
    <MealItem
      id={meals.id}
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
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