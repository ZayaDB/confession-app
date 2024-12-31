import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeartExplosion from "../components/HeartExplosion";
import "../styles/YesScreen.css";

const YesScreen = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const navigate = useNavigate(); // React Router의 navigate 사용

  const handleAnimationEnd = () => {
    setShowAnimation(false); // 애니메이션 종료 후 내용 표시
  };

  return (
    <div className="yes-screen">
      {showAnimation ? (
        <HeartExplosion onEnd={handleAnimationEnd} />
      ) : (
        <div className="yes-page">
          <h1 className="thank-you-message">Thank you for saying YES! 💖</h1>
          <p className="celebrate-text">
            네가 내 마음을 받아줘서 너무 고마워. 지금부터 특별한 여정을 시작해
            보자! 😊
          </p>
          <video
            src="/images/hi.mp4"
            type="video/mp4"
            loop
            autoPlay
            muted
            playsInline
            className="responsive-video"
          />

          <button
            className="restaurant-button"
            onClick={() => navigate("/restaurants")} // 클릭 시 /restaurants로 이동
          >
            미래로 가자
          </button>
        </div>
      )}
    </div>
  );
};

export default YesScreen;
