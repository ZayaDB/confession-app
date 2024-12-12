import React from "react";

const FoodSelector = ({ onSelectFood }) => {
  const foods = ["파스타", "스시", "스테이크", "피자"];

  const handleFoodClick = (food) => {
    onSelectFood(food);
  };

  return (
    <div>
      <h3>어떤 음식을 먹고 싶나요? 🍽️</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {foods.map((food) => (
          <button key={food} onClick={() => handleFoodClick(food)}>
            {food}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FoodSelector;
