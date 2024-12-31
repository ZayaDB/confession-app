import React from "react";
import "../styles/RestaurantList.css";

const Restaurants = () => {
  return (
    <div className="future-page">
      <div className="message-container">
        <h1 className="future-title">우리의 미래, 함께 그려볼래?</h1>
        <p className="future-message">
          2025년부터는 너와 함께
          <br />
          더 많은 추억을 쌓고 싶어.
          <br />
          크리스마스처럼 따뜻하고 행복한 시간을
          <br />
          항상 너와 함께하고 싶어.
        </p>
        <div className="promise-section">
          <h2>약속</h2>
          <ul>
            <li>서로의 하루를 더 행복하게 만들기</li>
            <li>좋은 추억 많이 만들기</li>
            <li>언제나 서로를 응원하기</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
