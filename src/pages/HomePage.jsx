import React, { useState } from "react";
import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const navigate = useNavigate();

  const handleOpenLetter = () => {
    setShowLetter(true);
  };

  const handleYesClick = () => {
    setShowSuccessScreen(true);
    setTimeout(() => {
      navigate("/yes");
    }, 3000);
  };

  const handleNoClick = () => {
    alert("그래도 고마워 😊");
  };

  return (
    <div className="homepage">
      {!showLetter ? (
        <div className="start-screen">
          <button className="open-letter-button" onClick={handleOpenLetter}>
            내 맘 전하기
          </button>
        </div>
      ) : (
        <div className="letter-screen">
          <div className="letter">
            <h1>Dear Princess Yumi</h1>
            <p>
              "처음 널 봤을 때, 난 너에게 완전히 빠져들었어. 너의 미소, 너의
              말투, 그리고 너의 작은 행동 하나하나가 나에게는 너무나 특별했어.
              그래서 아마 내가 너에게 다가가는 방법이 서툴렀던 걸지도 몰라.
              하지만 한 가지는 분명해. 내 마음만큼은 정말 진심이었다는 걸
              알아줬으면 좋겠어. 나는 너를 위해서라면 뭐든지 할 수 있을 만큼
              정말 많이 좋아해. 네가 필요하다고 말하면 기쁜 마음으로 달려갔고,
              네가 힘들다는 말 한마디면 어떻게든 네 곁에 있고 싶었어. 2025년이
              다가오는 지금, 나는 너와 조금 다른 관계가 되고 싶어. 그냥 좋은
              사람으로 머무르는 것이 아니라, 서로에게 더 특별한 존재가 되고
              싶어. 크리스마스처럼 따뜻하고 행복한 순간들을 너와 함께 만들어
              가고 싶어. 물론, 내가 가끔 너를 힘들게 했던 행동들도 있었겠지.
              하지만 너를 더 행복하게 만들고 싶다는 내 마음이 더 컸다는 걸
              알아줬으면 해. 앞으로도 더 나아지고, 네가 싫어하는 행동은
              고쳐가면서, 너에게 사랑이 되고, 힘이 되는 사람이 되고 싶어. 너를
              정말 많이 사랑해. 내 여자 되어줄래?"
              <br />
              <img src="../images/confession.gif" alt="" />
              <br />
              <strong>Can you be my 2025 and beyond?</strong>
            </p>
            <div className="buttons">
              <button className="yes-button" onClick={handleYesClick}>
                YES
              </button>
              <button className="no-button" onClick={handleNoClick}>
                NO
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessScreen && (
        <div className="success-screen">
          <h1 className="success-message">정말 고마워! 💕</h1>
          <img
            src="https://media.giphy.com/media/3o7TKU8RvQuomFfUUU/giphy.gif"
            alt="축하 이미지"
            className="success-image"
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
