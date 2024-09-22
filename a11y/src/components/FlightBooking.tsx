import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const STATUS_MESSAGE = {
    increase: "성인 승객 증가 ",
    decrease: "성인 승객 감소 ",
  };

  const incrementCount = () => {
    setStatusMessage(STATUS_MESSAGE.increase);
    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    setStatusMessage(STATUS_MESSAGE.decrease);
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
            onClick={decrementCount}
            aria-label={STATUS_MESSAGE.decrease}
          >
            -
          </button>
          <span aria-live="polite">
            <span className="visually-hidden">{statusMessage}</span>
            {adultCount}
          </span>
          <button
            className="button-text"
            onClick={incrementCount}
            aria-label={STATUS_MESSAGE.increase}
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
