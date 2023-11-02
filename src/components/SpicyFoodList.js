import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);

    setFoods([...foods, newFood]);
  }

  // function handleLiClick(foodId) {
  //   const newFoodArray = foods.filter((food) => food.id !== foodId);
  //   setFoods(newFoodArray);
  // }

    function handleLiClick(foodId) {
      const newFoodArray = foods.map((food) => {
        if (food.id === foodId) {
          return {
            ...food,
            heatLevel: food.heatLevel + 1
          };
        }
        return food;
      });
      setFoods(newFoodArray);
    }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
