import { useState } from 'react';

import './FlightBooking.css';

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState('');

  const incrementCount = () => {
    if (adultCount >= MAX_PASSENGERS) {
      setStatusMessage('승객은 최대 3명까지 선택할 수 있습니다.');
      return;
    }
    setAdultCount((prev) => prev + 1);
    setStatusMessage('');
  };

  const decrementCount = () => {
    if (adultCount <= 1) {
      setStatusMessage('최소 1명의 승객이 필요합니다.');
      return;
    }
    setAdultCount((prev) => prev - 1);
    setStatusMessage('');
  };

  return (
    <div className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <label htmlFor="adult-count" className="body-text">
          성인
        </label>
        <div className="counter">
          <button
            className="button-text"
            onClick={decrementCount}
            aria-label="성인 승객 감소"
          >
            -
          </button>
          <span id="adult-count" aria-live="polite" role="status">
            {adultCount}
          </span>
          <button
            className="button-text"
            onClick={incrementCount}
            aria-label="성인 승객 증가"
          >
            +
          </button>
        </div>
        <div className="hidden-text" role="alert">
          {statusMessage}
        </div>
      </div>
      <button className="search-button">항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
