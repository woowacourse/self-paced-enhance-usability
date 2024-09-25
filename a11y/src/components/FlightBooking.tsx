import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState("");

  const incrementCount = () => {
    if (adultCount === MAX_PASSENGERS) {
      setStatusMessage("최대 승객 수에 도달했습니다.");
      return;
    }

    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    if (adultCount === 1) {
      setStatusMessage("최소 1명의 승객이 필요합니다.");
      return;
    }
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
          <span aria-live="polite">{adultCount}</span>
          <button
            className="button-text"
            aria-label="성인 승객 증가"
            onClick={incrementCount}
          >
            +
          </button>
          <div role="alert" className="visually-hidden">
            {statusMessage}
          </div>
        </div>
      </div>
      <button className="search-button">항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
