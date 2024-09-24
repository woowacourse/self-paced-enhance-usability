import { useState } from 'react';

import './FlightBooking.css';

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [toastMessage, setToastMessage] = useState('');

  const adultCountMaxPassengers = adultCount === MAX_PASSENGERS;
  const adultCountMinPassengers = adultCount === 1;

  const incrementCount = () => {
    if (adultCountMaxPassengers) {
      setToastMessage('최대 승객 수에 도달했습니다.');

      return;
    }

    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    if (adultCountMinPassengers) {
      setToastMessage('승객은 최소 1명 이상이여야 합니다.');

      return;
    }

    setAdultCount((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className='flight-booking'>
      <h2 className='heading-2-text'>항공권 예매</h2>
      <div className='passenger-count'>
        <span className='body-text'>성인</span>
        <div className='counter'>
          <button
            aria-label='성인 승객 감소'
            disabled={adultCountMinPassengers}
            className={`button-text ${adultCountMinPassengers ? 'disabled' : ''}`}
            onClick={decrementCount}
          >
            -
          </button>
          <span aria-live='polite'>{adultCount}</span>
          <button
            aria-label='성인 승객 증가'
            disabled={adultCountMaxPassengers}
            className={`button-text ${adultCountMaxPassengers ? 'disabled' : ''}`}
            onClick={incrementCount}
          >
            +
          </button>
        </div>
      </div>
      {toastMessage && (
        <div className='visually-hidden' role='alert'>
          {toastMessage}
        </div>
      )}
      <button className='search-button'>항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
