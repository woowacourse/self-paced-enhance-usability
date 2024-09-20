import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState("");

  const incrementCount = () => {
    if (adultCount === MAX_PASSENGERS) {
      setStatusMessage("최대 승객 수에 도달했습니다");
      return;
    }

    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
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
      <h2 className="heading-2-text" aria-label="항공권 예매">
        항공권 예매
      </h2>
      <div className="passenger-count">
        <span className="body-text" aria-label="성인">
          성인
        </span>
        <div className="counter">
          <button
            className="button-text"
            onClick={decrementCount}
            aria-label="성인 승객 1 감소"
            type="button"
          >
            -
          </button>
          <span role="status" aria-live="assertive">
            {adultCount}
          </span>
          <button
            className="button-text"
            onClick={incrementCount}
            aria-label="성인 승객 1 증가"
            type="button"
          >
            +
          </button>
        </div>
      </div>
      {statusMessage && (
        <div
          className="visually-hidden"
          role="alert"
          aria-live="assertive"
          key={statusMessage}
        >
          {statusMessage}
        </div>
      )}
      <button className="search-button" aria-label="항공편 검색" type="submit">
        항공편 검색
      </button>
    </div>
  );
};

export default FlightBooking;
