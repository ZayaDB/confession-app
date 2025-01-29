import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles.css";

export default function BirthdayPage() {
  const [showMain, setShowMain] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [audio] = useState(new Audio("/music/birth.mp3"));
  const images = ["/images/4.png", "/images/5.png", "/images/1.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const startMusic = () => {
    audio.play();
    setShowMain(true);
  };

  const triggerSurprise = () => {
    setShowSurprise(true);
    setTimeout(() => setShowWish(true), 2000); // 2초 후에 소원 빌기 메시지 나타남
  };

  return (
    <div className="birthday-container">
      {!showMain ? (
        <motion.button
          onClick={startMusic}
          className="start-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          🎶 Click Me 🎶
        </motion.button>
      ) : (
        <>
          {/* 인트로 애니메이션 */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, rotate: [0, -5, 5, -5, 5, 0] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="neon-text animated-text"
          >
            🎉 HAPPY BIRTHDAY 🎉
          </motion.h1>

          {/* 메인 이미지들 */}
          <motion.img
            src={images[currentImage]}
            alt="Birthday Image"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="birthday-img"
          />

          {/* 서프라이즈 버튼 */}
          {!showSurprise && (
            <motion.button
              onClick={triggerSurprise}
              className="surprise-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🎁 Surprise Me 🎁
            </motion.button>
          )}

          {/* 케이크와 초 */}
          {showSurprise && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="cake-container"
            >
              <img
                src="https://media1.giphy.com/media/fxsW3PnQx06N7Mop3D/giphy.gif?cid=6c09b9529jmzooxgsjwy5n73babpzuf9wnzy3idk7922vf0q&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                alt="Birthday Cake"
                className="cake-img"
              />
            </motion.div>
          )}

          {/* 소원 빌기 메시지 */}
          {showWish && (
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="wish-text"
            >
              🌟 close your eyes and whisper your wish 🌟
            </motion.h2>
          )}
        </>
      )}
    </div>
  );
}
