import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;
const MIN_PASSENGERS = 1;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState("");

  const incrementCount = () => {
    setAdultCount((prev) => {
      if (prev < MAX_PASSENGERS) {
        setStatusMessage("");
        return prev + 1;
      } else {
        setStatusMessage("최대 승객 수에 도달했습니다.");
        return prev;
      }
    });
  };
  const decrementCount = () => {
    setAdultCount((prev) => {
      if (prev > MIN_PASSENGERS) {
        setStatusMessage("");
        return prev - 1;
      } else {
        setStatusMessage("성인 승객은 최소 1명이어야 합니다.");
        return prev;
      }
    });
  };

  return (
    <form className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <div className="counter">
          <button
            type="button"
            className="button-text"
            onClick={decrementCount}
            aria-label="성인 승객 1명 감소"
          >
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button
            type="button"
            className="button-text"
            onClick={incrementCount}
            aria-label="성인 승객 1명 추가"
          >
            +
          </button>
        </div>
      </div>

      <div className="visually-hidden" role="status" aria-live="assertive">
        {statusMessage}
      </div>

      <button type="submit" className="search-button">
        항공편 검색
      </button>
    </form>
  );
};

export default FlightBooking;
