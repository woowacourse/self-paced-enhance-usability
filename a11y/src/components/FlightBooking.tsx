import { useEffect, useState } from 'react';

import './FlightBooking.css';

const MAX_PASSENGERS = 3;
const MIN_PASSENGERS = 1;

const STATUS_MESSAGES = {
  max: '최대 승객 수에 도달했습니다',
  min: '최소 1명의 승객이 필요합니다',
};

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatusMessage('');
    }, 0);

    return () => clearTimeout(timer);
  });

  const incrementCount = () => {
    if (adultCount === MAX_PASSENGERS) {
      setStatusMessage(STATUS_MESSAGES.max);
      return;
    }

    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    if (adultCount === MIN_PASSENGERS) {
      setStatusMessage(STATUS_MESSAGES.min);
      return;
    }

    setAdultCount((prev) => Math.max(1, prev - 1));
  };

  return (
    <section className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <div className="counter">
          <button className="button-text" aria-label="성인 승객 감소" onClick={decrementCount}>
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          {statusMessage && (
            <span role="alert" className="visually-hidden">
              {statusMessage}
            </span>
          )}
          <button className="button-text" aria-label="성인 승객 증가" onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
      <button className="search-button">항공편 검색</button>
    </section>
  );
};

export default FlightBooking;
