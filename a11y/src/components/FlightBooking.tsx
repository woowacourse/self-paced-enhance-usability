import { useState } from "react";
import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState("");

  const incrementCount = () => {
    setAdultCount((prev) => {
      if (prev >= MAX_PASSENGERS) {
        setStatusMessage("최대 승객 수에 도달했습니다.");
        return prev;
      }
      setStatusMessage("");
      return prev + 1;
    });
  };

  const decrementCount = () => {
    setAdultCount((prev) => {
      if (prev <= 1) {
        setStatusMessage("최소 1명의 승객이 필요합니다.");
        return prev;
      }
      setStatusMessage("");
      return prev - 1;
    });
  };

  return (
    <section className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>

      <div className="passenger-count">
        <span className="body-text" id="adult-label">
          성인
        </span>

        <div className="counter">
          <button
            className="button-text"
            onClick={decrementCount}
            aria-label="성인 승객 감소"
            aria-describedby="button"
          >
            -
          </button>
          <span aria-live="polite" aria-atomic="true">
            {adultCount}
          </span>
          <button
            className="button-text"
            onClick={incrementCount}
            aria-label="성인 승객 증가"
            aria-describedby="button"
          >
            +
          </button>
        </div>
        <span className="visually-hidden" role="status" aria-live="assertive">
          {statusMessage}
        </span>
      </div>
      <button className="search-button">항공편 검색</button>
    </section>
  );
};

export default FlightBooking;
