import React, { useState } from "react";
import HeartExplosion from "../components/HeartExplosion";
import DateSelector from "../components/DateSelector";
import FoodSelector from "../components/FoodSelector";
import "../styles/YesScreen.css";

const YesScreen = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedFood, setSelectedFood] = useState("");

  const handleAnimationEnd = () => {
    setShowAnimation(false); // 애니메이션 종료 후 내용 표시
  };

  const handleNextStep = () => {
    alert(`날짜: ${selectedDate}, 음식: ${selectedFood}`);
    // 다음 페이지로 이동하거나 선택 사항 저장
  };

  return (
    <div className="yes-screen">
      {showAnimation ? (
        <HeartExplosion onEnd={handleAnimationEnd} />
      ) : (
        <div className="content">
          <h2>만남 준비하기 💖</h2>
          <DateSelector onSelectDate={setSelectedDate} />
          <FoodSelector onSelectFood={setSelectedFood} />
          <button
            className="next-button"
            disabled={!selectedDate || !selectedFood}
            onClick={handleNextStep}
          >
            다음으로
          </button>
        </div>
      )}
    </div>
  );
};

export default YesScreen;
