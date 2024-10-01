import { useState } from "react";

import "./FlightBooking.css";

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState("");

  const incrementCount = () => {
    if (adultCount === 3) {
      setStatusMessage("최대 승객 수에 도달했습니다");
      return;
    }

    setAdultCount((prev) => Math.min(3, prev + 1));
  };

  const decrementCount = () => {
    if (adultCount === 1) {
      setStatusMessage("최소 1명의 승객이 필요합니다");
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
          <button aria-label="승객 성인 감소" className="button-text" onClick={decrementCount}>
            -
          </button>
          <span role="status" aria-live="polite">
            {adultCount}
          </span>
          <button aria-label="승객 성인 증가" className="button-text" onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
      {statusMessage && (
        <div className="visually-hidden" role="alert">
          {statusMessage}
        </div>
      )}
      <button className="search-button">항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
