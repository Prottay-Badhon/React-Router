import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import './Restaurant.css'
const Restaurant = () => {
    const [food,setFood]=useState('');
    const [meals,setMeals]=useState([]);
    const searchHandler=(e)=>{
        setFood(e.target.value)
    }
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
        fetch(url)
        .then(res =>res.json())
        .then(data=> setMeals(data.meals))
    },[food])
  return (
    <div>
      <input type="text" placeholder="Enter food" onChange={searchHandler}></input>
      <div>
        <h2>Searched Food: </h2>
        <div className="meals">
            {
                meals.map(meal => <Meal meal={meal}></Meal>)
            }
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
