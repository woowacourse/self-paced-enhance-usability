import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);

  const incrementCount = () => {
    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    setAdultCount((prev) => Math.max(1, prev - 1));
  };

  return (
    <article className="flight-booking">
      <h1 className="heading-2-text">항공권 예매</h1>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <section className="counter">
          <button className="button-text" onClick={decrementCount} aria-label="성인 승객 감소">
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button className="button-text" onClick={incrementCount} aria-label="성인 승객 증가">
            +
          </button>
        </section>
      </div>
      <button className="search-button">항공편 검색</button>
    </article>
  );
};

export default FlightBooking;
