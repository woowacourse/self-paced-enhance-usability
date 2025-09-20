import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;
const MIN_PASSENGERS = 1;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState("");

  const incrementCount = () => {
    setAdultCount((prev) => {
      const next = Math.min(MAX_PASSENGERS, prev + 1);
      if (next === MAX_PASSENGERS && prev !== MAX_PASSENGERS) {
        setStatusMessage("최대 승객 수에 도달했습니다.");
      } else {
        setStatusMessage("");
      }
      return next;
    });
  };

  const decrementCount = () => {
    setAdultCount((prev) => {
      const next = Math.max(MIN_PASSENGERS, prev - 1);
      if (next === MIN_PASSENGERS && prev !== MIN_PASSENGERS) {
        setStatusMessage("최소 승객 수입니다.");
      } else {
        setStatusMessage("");
      }
      return next;
    });
  };

  return (
    <div className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div
        className="passenger-count"
        role="group"
        aria-labelledby="adult-label"
      >
        <span className="body-text" id="adult-label">
          성인
        </span>
        <div className="counter">
          <button
            className="button-text"
            onClick={decrementCount}
            aria-label="성인 승객 감소"
            aria-controls="adult-count"
            disabled={adultCount <= MIN_PASSENGERS}
          >
            -
          </button>
          <span
            id="adult-count"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {adultCount}
          </span>
          <button
            className="button-text"
            onClick={incrementCount}
            aria-label="성인 승객 증가"
            aria-controls="adult-count"
            disabled={adultCount >= MAX_PASSENGERS}
          >
            +
          </button>
        </div>
      </div>
      <div
        className="visually-hidden"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {statusMessage}
      </div>
      <button className="search-button">항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
