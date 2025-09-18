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
    setTimeout(() => {
      setStatusMessage("");
    }, 500);

    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    if (adultCount === 1) {
      setStatusMessage("최소 승객 수에 도달했습니다");
      return;
    }
    setTimeout(() => {
      setStatusMessage("");
    }, 500);

    setAdultCount((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        {statusMessage && (
          <div id="status-message" className="visually-hidden" role="alert">
            {statusMessage}
          </div>
        )}

        <span className="body-text">성인</span>
        <div className="counter">
          <button
            className="button-text"
            onClick={decrementCount}
            disabled={adultCount === 1}
            aria-label={`성인 인원 감소 (현재 ${adultCount}명${
              adultCount === 1 ? ", 최소 인원" : ""
            })`}
            aria-describedby="status-message"
          >
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button
            className="button-text"
            onClick={incrementCount}
            disabled={adultCount === MAX_PASSENGERS}
            aria-label={`성인 인원 증가 (현재 ${adultCount}명${
              adultCount === MAX_PASSENGERS ? ", 최대 인원" : ""
            })`}
            aria-describedby="status-message"
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
