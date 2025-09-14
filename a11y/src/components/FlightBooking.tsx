import { useState } from 'react';

import './FlightBooking.css';

const MAX_PASSENGERS = 3;
const MIN_PASSENGERS = 1;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [alertMessage, setAlertMessage] = useState('');

  const incrementCount = () => {
    setAdultCount((prev) => {
      setAlertMessage('');
      if (prev >= MAX_PASSENGERS) {
        setAlertMessage('최대 승객 수에 도달했습니다.');
        return prev;
      }
      return prev + 1;
    });
  };

  const decrementCount = () => {
    setAdultCount((prev) => {
      setAlertMessage('');
      if (prev <= MIN_PASSENGERS) {
        setAlertMessage('최소 1명의 승객이 필요합니다.');
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <div className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <div className="counter">
          <button className="button-text" onClick={decrementCount} aria-label="성인 승객 감소">
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button className="button-text" onClick={incrementCount} aria-label="성인 승객 증가">
            +
          </button>
        </div>
      </div>
      <button className="search-button">항공편 검색</button>

      {alertMessage && (
        <p role="alert" className="alert-message">
          {alertMessage}
        </p>
      )}
    </div>
  );
};

export default FlightBooking;
