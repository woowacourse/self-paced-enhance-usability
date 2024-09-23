import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);

  const incrementCount = () => {
    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    setAdultCount((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <div className="counter">
          <button
            className="button-text"
            aria-label="성인 승객 감소"
            onClick={decrementCount}
          >
            -
          </button>
          <span>{adultCount}</span>
          <button
            className="button-text"
            aria-label="성인 승객 증가"
            onClick={incrementCount}
          >
            +
          </button>
        </div>
      </div>
      <button className="search-button">항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
