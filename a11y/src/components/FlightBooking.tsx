import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState("");

  const incrementCount = () => {
    setAdultCount((prev) => {
      const newCount = Math.min(MAX_PASSENGERS, prev + 1);
      if (newCount === MAX_PASSENGERS && prev < MAX_PASSENGERS) {
        setStatusMessage(`최대 ${MAX_PASSENGERS}명까지 선택할 수 있습니다.`);
      } else {
        setStatusMessage("");
      }
      return newCount;
    });
  };

  const decrementCount = () => {
    setAdultCount((prev) => {
      const newCount = Math.max(1, prev - 1);
      if (newCount === 1 && prev > 1) {
        setStatusMessage("최소 1명은 선택해야 합니다.");
      } else {
        setStatusMessage("");
      }
      return newCount;
    });
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
      {statusMessage && (
        <div
          className="status-message"
          aria-live="polite"
          aria-atomic="true"
          role="status"
        >
          {statusMessage}
        </div>
      )}
      <button className="search-button">항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
