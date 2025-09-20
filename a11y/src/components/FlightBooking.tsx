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

  const getLimitMessage = () => {
    if (adultCount <= 1) {
      return "최소 승객 수에 도달했습니다.";
    }
    if (adultCount === MAX_PASSENGERS) {
      return "최대 승객 수에 도달했습니다.";
    }
    return "";
  };

  return (
    <div className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <div className="counter">
          <button
            aria-label="성인 승객 감소"
            className="button-text"
            disabled={adultCount === 1}
            onClick={decrementCount}
          >
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button
            aria-label="성인 승객 증가"
            className="button-text"
            disabled={adultCount >= MAX_PASSENGERS}
            onClick={incrementCount}
          >
            +
          </button>
        </div>
        <div className="visually-hidden" aria-live="polite">
          {getLimitMessage()}
        </div>
      </div>
      <button className="search-button">항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
