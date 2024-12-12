import React from "react";

const DateSelector = ({ onSelectDate }) => {
  const handleDateChange = (e) => {
    onSelectDate(e.target.value);
  };

  return (
    <div>
      <h3>언제 만날까요? 📅</h3>
      <input type="date" onChange={handleDateChange} />
    </div>
  );
};

export default DateSelector;
