import React from 'react';
import "./Meal.css"
const Meal = (props) => {
    const {idMeal,strMeal,strCategory,strMealThumb}=props.meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
        </div>
    );
};

export default Meal;