import { useState } from 'react';

import './FlightBooking.css';

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState(''); // 스크린 리더가 읽을 메시지

  const incrementCount = () => {
    if (adultCount >= MAX_PASSENGERS) {
      setStatusMessage('최대 승객 수에 도달했습니다.');
    } else {
      setStatusMessage('');
      setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
    }
  };

  const decrementCount = () => {
    setAdultCount((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className='flight-booking'>
      <h2 className='heading-2-text'>항공권 예매</h2>
      <div className='passenger-count'>
        <span className='body-text'>성인</span>
        <div className='counter'>
          <button className={`button-text`} onClick={decrementCount} aria-label='성인 승객 감소'>
            -
          </button>
          <span aria-live='polite'>{adultCount}</span>
          <button
            className={`button-text ${adultCount >= MAX_PASSENGERS ? 'disabled' : ''}`}
            onClick={incrementCount}
            aria-disabled={adultCount >= MAX_PASSENGERS}
            aria-label='성인 승객 증가'>
            +
          </button>
        </div>
      </div>
      <div className='visually-hidden' role='status' aria-live='assertive'>
        {statusMessage}
      </div>
      <button className='search-button'>항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
