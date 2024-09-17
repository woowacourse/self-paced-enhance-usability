import { useState } from 'react';

import './FlightBooking.css';

const MIN_PASSENGERS = 1;
const MAX_PASSENGERS = 3;

const STATUS_MESSAGE = {
  min: '성인 승객 수는 최소 1명이어야 해요.',
  max: '성인 승객 수는 최대 3명까지 가능해요.',
};

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState('');

  const incrementCount = () => {
    if (adultCount === MAX_PASSENGERS) {
      setStatusMessage(STATUS_MESSAGE.max);
      return;
    } else {
      setStatusMessage('');
    }

    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    if (adultCount === MIN_PASSENGERS) {
      setStatusMessage(STATUS_MESSAGE.min);
      return;
    } else {
      setStatusMessage('');
    }

    setAdultCount((prev) => Math.max(MIN_PASSENGERS, prev - 1));
  };

  return (
    <div className='flight-booking'>
      <h2 className='heading-2-text'>항공권 예매</h2>
      <div className='passenger-count'>
        <span className='body-text'>성인</span>
        <div className='counter'>
          <button className='button-text' aria-label='성인 승객 감소' onClick={decrementCount}>
            -
          </button>
          <span aria-live='polite'>{adultCount}</span>
          <button className='button-text' aria-label='성인 승객 추가' onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
      <div className='visually-hidden' role='alert'>
        {statusMessage}
      </div>
      <button className='search-button'>항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
