import { useState } from 'react';

import './FlightBooking.css';

const MIN_PASSENGERS = 1;
const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [limitMessage, setLimitMessage] = useState('');

  const incrementCount = () => {
    if (adultCount === MAX_PASSENGERS) {
      setLimitMessage('최대 승객 수에 도달했습니다.');
      return;
    }
    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
    setLimitMessage('');
  };

  const decrementCount = () => {
    if (adultCount === MIN_PASSENGERS) {
      setLimitMessage('최소 승객 수에 도달했습니다.');
      return;
    }
    setAdultCount((prev) => Math.max(MIN_PASSENGERS, prev - 1));
  };

  return (
    <form className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <label className="body-text">성인</label>
        <div className="counter">
          <button
            type="button"
            aria-label="성인 승객 감소"
            className="button-text"
            onClick={decrementCount}
          >
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button
            type="button"
            aria-label="성인 승객 증가"
            className="button-text"
            onClick={incrementCount}
          >
            +
          </button>
          {limitMessage && (
            <div className="visually-hidden" role="status" aria-live="polite">
              {limitMessage}
            </div>
          )}
        </div>
      </div>
      <button className="search-button">항공편 검색</button>
    </form>
  );
};

export default FlightBooking;
