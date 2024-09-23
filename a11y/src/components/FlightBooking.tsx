import { useEffect, useRef, useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;
const MIN_PASSENGERS = 1;

const getMessage = (count: number) => {
  if (count === MAX_PASSENGERS) return "최대 승객 수에 도달했습니다.";
  if (count === MIN_PASSENGERS) return "최소 승객 수는 1명입니다.";
  return `성인 승객 ${count}명`;
};

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [message, setMessage] = useState(getMessage(1));
  const messageRef = useRef<HTMLDivElement | null>(null);

  const adjustCount = (change: number) => {
    setAdultCount((prevCount) => {
      const newCount = prevCount + change;
      setMessage(getMessage(newCount));
      return newCount;
    });
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.focus();
    }
  }, [message]);

  return (
    <section className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <div className="counter">
          <button
            className="button-text"
            onClick={() => adjustCount(-1)}
            aria-label="성인 승객 감소"
            disabled={adultCount === MIN_PASSENGERS}
          >
            -
          </button>
          <span aria-live="polite" aria-atomic="true">
            {adultCount}
          </span>
          <button
            className="button-text"
            onClick={() => adjustCount(1)}
            aria-label="성인 승객 증가"
            disabled={adultCount === MAX_PASSENGERS}
          >
            +
          </button>
        </div>
      </div>
      <div
        aria-live="polite"
        aria-atomic="true"
        ref={messageRef}
        tabIndex={-1}
        className="aria-hidden"
      >
        {message}
      </div>
      <button className="search-button">항공편 검색</button>
    </section>
  );
};

export default FlightBooking;
