import React, { useState } from "react";
import HeartExplosion from "../components/HeartExplosion";
import "../styles/YesScreen.css";

const YesScreen = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationEnd = () => {
    setShowAnimation(false); // 애니메이션 종료 후 내용 표시
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
    </div>
  );
};

export default YesScreen;
