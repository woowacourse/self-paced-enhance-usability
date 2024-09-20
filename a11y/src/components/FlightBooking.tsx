import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [message, setMessage] = useState("");

  const incrementCount = () => {
    setAdultCount((prev) => {
      if (prev + 1 >= MAX_PASSENGERS) {
        setMessage("최대 승객 수에 도달했습니다.");
      } else {
        setMessage("");
      }
      return Math.min(MAX_PASSENGERS, prev + 1);
    });
  };

  const decrementCount = () => {
    setAdultCount((prev) => {
      setMessage("");
      return Math.max(1, prev - 1);
    });
  };

  return (
    <section className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <div className="counter">
          <button className="button-text" onClick={decrementCount} aria-label={"성인 승객 한 명 줄이기"}>
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button className="button-text" onClick={incrementCount} aria-label={"성인 승객 한 명 추가하기"}>
            +
          </button>
        </div>
      </div>
      {message && (
        <div className="visually-hidden" aria-live="polite" role="alert">
          {message}
        </div>
      )}
      <button className="search-button">항공편 검색</button>
    </section>
  );
};

export default FlightBooking;
