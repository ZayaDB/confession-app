import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles.css";

export default function BirthdayPage() {
  const [showMain, setShowMain] = useState(false);
  const [showSorry, setShowSorry] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [audio] = useState(new Audio("/music/birth.mp3"));

  const images = [
    "/images/1.png",
    "/images/ai_g_img_2025-03-11_1741691119063_5557.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true); // 현재 이미지 페이드 아웃
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFadeOut(false); // 새 이미지 페이드 인
      }, 1000); // 페이드 아웃 후 1초 후 이미지 변경
    }, 4000); // 4초마다 이미지 변경
    return () => clearInterval(interval);
  }, []);

  const startSequence = () => {
    setShowSorry(true);
    setTimeout(() => {
      setShowMain(true);
    }, 5000); // 5초 후 메인 화면 활성화
    audio.play();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowMessage(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="birthday-container">
      {!showSorry ? (
        <motion.button
          onClick={startSequence}
          className="start-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          🎶 Click Me 🎶
        </motion.button>
      ) : !showMain ? (
        <motion.div
          className="sorry-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.h1 className="sorry-text">
            💐 МАРТААР ЦЭЦЭГ ӨГӨӨГҮЙД УУЧЛААРАЙ
            <br />
            <span className="highlight">ЧИ ӨӨРӨӨ ЦЭЦЭГ ЮМ ШҮҮ 🌸</span>
          </motion.h1>
          <motion.img
            src="/images/puppy-dog-eyes-sad.gif"
            alt="Puppy Eyes"
            className="sorry-gif"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <span className="highlight">SCROLL ME 🌸</span>
        </motion.div>
      ) : (
        <>
          {/* Happy Women's Day 메시지 */}
          {showMessage && (
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0, rotate: [0, -5, 5, -5, 5, 0] }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="neon-text animated-text"
            >
              🎉 HAPPY Women's Day Dear Future Wife 🎉
            </motion.h1>
          )}

          {/* 이미지 애니메이션 추가 */}
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="image-container"
            >
              <AnimatePresence>
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="Birthday Image"
                  className="birthday-img"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: fadeOut ? 0 : 1,
                    scale: fadeOut ? 0.8 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}
