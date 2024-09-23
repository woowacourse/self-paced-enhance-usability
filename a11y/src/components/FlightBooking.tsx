import { useState } from "react";

import "./FlightBooking.css";

const MIN_PASSENGERS = 1;
const MAX_PASSENGERS = 3;

const MESSAGE = {
  minCount: `최소 ${MIN_PASSENGERS}명의 승객이 필요합니다.`,
  maxCount: "최대 승객 수에 도달했습니다.",
};

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [countMessage, setCountMessage] = useState("");

  const incrementCount = () => {
    if (adultCount >= MAX_PASSENGERS) {
      setCountMessage(MESSAGE.maxCount);
      return;
    }

    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    if (adultCount <= MIN_PASSENGERS) {
      setCountMessage(MESSAGE.minCount);
      return;
    }

    setAdultCount((prev) => Math.max(MIN_PASSENGERS, prev - 1));
  };

  return (
    <div className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
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
      {countMessage && (
        <p
          aria-label={countMessage}
          role="alert"
          style={{ fontSize: "13px", color: "red", height: "23px" }}
        >
          {countMessage}
        </p>
      )}
      <button className="search-button">항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
