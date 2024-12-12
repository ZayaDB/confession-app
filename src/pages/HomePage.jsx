import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate("/yes"); // /yes 경로로 이동
  };

  return (
    <div>
      <h1>나랑 사귈래?</h1>
      <button onClick={handleYesClick}>YES</button>
    </div>
  );
};

export default HomePage;
