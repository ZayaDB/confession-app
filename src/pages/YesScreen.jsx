import React, { useState } from "react";
import HeartExplosion from "../components/HeartExplosion";
import "../styles/YesScreen.css";

const YesScreen = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationEnd = () => {
    setShowAnimation(false); // 애니메이션 종료 후 내용 표시
  };
  const [restaurant, setRestaurant] = useState("");
  const [food, setFood] = useState("");

  const handleRestaurantChange = (e) => {
    setRestaurant(e.target.value);
  };

  const handleFoodChange = (e) => {
    setFood(e.target.value);
  };

  const handleSubmit = () => {
    if (restaurant && food) {
      alert(`오늘은 ${restaurant}에서 ${food}를 먹을 거예요!`);
    } else {
      alert("레스토랑과 음식을 선택해주세요.");
    }
  };
  return (
    <div className="yes-screen">
      {showAnimation ? (
        <HeartExplosion onEnd={handleAnimationEnd} />
      ) : (
        <div className="yes-page">
          <h2 className="celebrate-text">Thank you be my guest Princess 💖</h2>
        </div>
      )}
      <img
        src="https://media3.giphy.com/media/lMameLIF8voLu8HxWV/200.gif?cid=6c09b952bldtksb1q5lf7b2rx0mrxx2e11nshb55kf9ckl2r&ep=v1_gifs_search&rid=200.gif&ct=g"
        alt=""
      />
      <section className="restaurant-section">
        <h1>어디서 뭐 먹을래?</h1>

        {/* 레스토랑 선택 */}
        <div className="restaurant-select">
          <label>레스토랑 선택:</label>
          <select onChange={handleRestaurantChange} value={restaurant}>
            <option value="">-- 선택하세요 --</option>
            <option value="스타벅스">스타벅스</option>
            <option value="맥도날드">맥도날드</option>
            <option value="피자헛">피자헛</option>
            <option value="한식당">한식당</option>
            <option value="공주">공주의 선택</option>
          </select>
        </div>

        {/* 음식 선택 */}
        <div className="food-select">
          <label>먹고 싶은 음식:</label>
          <select onChange={handleFoodChange} value={food}>
            <option value="">-- 선택하세요 --</option>
            <option value="아메리카노">아메리카노</option>
            <option value="불고기 버거">불고기 버거</option>
            <option value="페퍼로니 피자">페퍼로니 피자</option>
            <option value="비빔밥">비빔밥</option>
            <option value="비빔밥">공주의 선택</option>
          </select>
        </div>

        {/* 확인 버튼 */}
        <button className="submit-button" onClick={handleSubmit}>
          선택 완료
        </button>
      </section>
      {restaurant && food && (
        <div className="result">
          <h2>그날의 선택은:</h2>
          <p>
            <strong>{restaurant}</strong>에서 <strong>{food}</strong>를 먹을
            거예요! 지금 바로 전화해서 알리기 헤헤
          </p>
        </div>
      )}
    </div>
  );
};

export default YesScreen;
