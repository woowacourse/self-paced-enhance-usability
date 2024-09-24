import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;
const MIN_PASSENGERS = 1;
const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(MIN_PASSENGERS);
  const [helpMessage, setHelpMessage] = useState("");

  const incrementCount = () => {
    if (adultCount == MAX_PASSENGERS) {
      setHelpMessage(`최대 승객 수는 ${MAX_PASSENGERS}명 입니다.`);
      return;
    }
    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
    setHelpMessage("");
  };

  const decrementCount = () => {
    if (adultCount == MIN_PASSENGERS) {
      setHelpMessage(`최소 승객 수는 ${MIN_PASSENGERS}명 입니다.`);
      return;
    }
    setAdultCount((prev) => Math.max(1, prev - 1));
    setHelpMessage("");
  };

  return (
    <section className="flight-booking">
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
      <div
        className="help-text"
        aria-label="도움말 메시지"
        aria-live="polite"
      >
        {helpMessage}
      </div>
      <button className="search-button">항공편 검색</button>
    </section>
  );
};

export default FlightBooking;
