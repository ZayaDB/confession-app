import React, { useEffect } from "react";
import "../styles/HeartExplosion.css";

const HeartExplosion = ({ onEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnd(); // 일정 시간 후 애니메이션 종료
    }, 3000);
    return () => clearTimeout(timer);
  }, [onEnd]);

  return <div className="heart-explosion">💖💖💖</div>;
};

export default HeartExplosion;
