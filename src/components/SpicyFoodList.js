import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState('All')

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    const newFoodArray = [...foods,newFood]
    setFoods(newFoodArray)
  }

  // function handleClick(id){
  //   const newFoodArray = foods.map(food => {
  //     if(id === food.id){
  //       return {
  //         ...food,
  //         heatLevel: food.heatLevel + 1
  //       }
  //     }else{
  //       return food
  //     }
  //   })
  //   setFoods(newFoodArray)
  // }

  function handleClick(id){
    const newFoodArray = foods.filter(food => food.id !== id)
    setFoods(newFoodArray)
  }

  // function handleFilter(event){
  //   let foodType = event.target.value
  //   debugger
  //   let allFoods = [...foods]
  //   if(foodType === 'All'){
  //     return foods
  //   }else{
  //     const newFoodArray = foods.filter(food => food.cuisine === foodType)
  //     setFoods(newFoodArray)
  //   }

  // }

  function handleFilter(event) {
    setFilterBy(event.target.value)
  }

  const foodsToDisplay = foods.filter((food) => {
    debugger
    if(filterBy === 'All'){
      return true
    }else {
      return food.cuisine === filterBy
    }
  })

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={()=>handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange = {handleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
    </select>
    </div>
  );
}

export default SpicyFoodList;
