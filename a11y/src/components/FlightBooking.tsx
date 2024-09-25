import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [adultCountLimitMessage, setAdultCountLimitMessage] = useState("");

  const incrementCount = () => {
    if (adultCount === MAX_PASSENGERS) {
      setAdultCountLimitMessage("최대 승객 수에 도달했습니다");
      return;
    }

    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
    setAdultCountLimitMessage("");
  };

  const decrementCount = () => {
    if (adultCount === 1) {
      setAdultCountLimitMessage("최소 1명의 승객이 필요합니다");
      return;
    }

    setAdultCount((prev) => Math.max(1, prev - 1));
    setAdultCountLimitMessage("");
  };

  return (
    <div className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      {adultCountLimitMessage && (
        <div className="visually-hidden" role="alert">
          {adultCountLimitMessage}
        </div>
      )}
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <div className="counter">
          <button
            className="button-text"
            onClick={decrementCount}
            aria-label="성인 승객 감소"
          >
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button
            className="button-text"
            onClick={incrementCount}
            aria-label="성인 승객 증가"
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
