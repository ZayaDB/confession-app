import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isNoHovering, setIsNoHovering] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const navigate = useNavigate();

  const handleYesClick = () => {
    setShowSuccessScreen(true); // 고백 성공 화면 띄우기
    setTimeout(() => {
      navigate("/yes"); // 3초 후 화면 전환
    }, 3000);
  };
  const handleNoHover = () => {
    setIsNoHovering(true);
  };

  const handleNoReset = () => {
    setIsNoHovering(false);
  };
  const scrollToSecondSection = () => {
    document
      .getElementById("second-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const snowContainer = document.querySelector(".homepage");
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${3 + Math.random() * 2}s`;
      snowflake.style.width = snowflake.style.height = `${
        5 + Math.random() * 10
      }px`;
      snowContainer.appendChild(snowflake);
    }
  }, []);
  return (
    <div className="homepage">
      {/* 첫 번째 화면 */}
      <section className="first-section">
        <h1 className="scroll-text">안녕 SnowPrincess Yumi ⛄</h1>
        <img src="/images/yumi.png" style={{ height: "461px" }} alt="" />
        <p className="scroll-text">스크롤을 내려서 눈의 성으로 가보자! ⬇</p>
        <div className="princess-container">
          <img
            src="/images/princess.png" // 공주 이미지 경로
            alt="공주 등장"
            className="princess"
          />
        </div>
      </section>

      {/* 두 번째 화면 */}
      <section id="second-section" className="second-section">
        <h1>Can you be a Christmas with me?</h1>
        <div className="img">
          <img
            src="/images/confession.gif"
            alt="고백하는 모습"
            className="background-gif"
          />
        </div>
        <div className="buttons">
          <button className="yes-button" onClick={handleYesClick}>
            YES
          </button>
          <button className="no-button" onClick={() => alert("ㅠㅠㅠ")}>
            NO
          </button>
        </div>
        <img
          src="https://media3.giphy.com/media/huWlf4Dde6R9K/giphy.gif?cid=6c09b952qktdf13t345rrykfsxgldi63tnhg5ghzycfxogtm&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
          alt=""
        />
      </section>
      {showSuccessScreen && (
        <div className="success-screen">
          <h1 className="success-message">오 예ㅖㅖㅖ! 💕</h1>
        </div>
      )}
    </div>
  );
};

export default HomePage;
