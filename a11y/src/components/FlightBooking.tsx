import { useState, useRef } from 'react';

import './FlightBooking.css';

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState('');
  const messageKeyRef = useRef(0);

  const incrementCount = () => {
    setAdultCount((prev) => {
      if (prev === MAX_PASSENGERS) {
        messageKeyRef.current += 1;
        setStatusMessage('최대 승객 수에 도달했습니다');
        return prev;
      }
      setStatusMessage('');
      return prev + 1;
    });
  };

  const decrementCount = () => {
    setAdultCount((prev) => {
      if (prev <= 1) {
        messageKeyRef.current += 1;
        setStatusMessage('최소 1명의 승객이 필요합니다');
        return prev;
      }
      setStatusMessage('');
      return prev - 1;
    });
  };

  return (
    <div className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <label htmlFor="adult-count" className="body-text">
          성인
        </label>
        <div className="counter">
          <button className="button-text" onClick={decrementCount} aria-label="성인 승객 감소">
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button className="button-text" onClick={incrementCount} aria-label="성인 승객 증가">
            +
          </button>
          {statusMessage && (
            <div key={messageKeyRef.current} className="visually-hidden" role="alert">
              {statusMessage}
            </div>
          )}
        </div>
      </div>
      <button className="search-button">항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
