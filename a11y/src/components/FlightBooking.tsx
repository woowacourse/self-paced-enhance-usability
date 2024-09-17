import { useState } from 'react';

import './FlightBooking.css';

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [alertMessage, setAlertMessage] = useState('');

  const incrementCount = () => {
    if (adultCount === MAX_PASSENGERS) {
      setAlertMessage('최대 승객 수에 도달하였습니다.');
      return;
    }

    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    if (adultCount === 1) {
      setAlertMessage('최소 승객 수에 도달하였습니다.');
      return;
    }

    setAdultCount((prev) => Math.max(1, prev - 1));
  };

  return (
    <section className='flight-booking'>
      <h2 className='heading-2-text'>항공권 예매</h2>
      <div className='passenger-count'>
        <span className='body-text'>성인</span>
        <div className='counter'>
          <button
            aria-label='성인 승객 감소'
            className='button-text'
            onClick={decrementCount}
          >
            -
          </button>
          <span aria-live='polite'>{adultCount}</span>
          <button
            aria-label='성인 승객 증가'
            className='button-text'
            onClick={incrementCount}
          >
            +
          </button>
        </div>
      </div>
      <button className='search-button'>항공편 검색</button>
      {alertMessage && (
        <div className='visually-hidden' role='alert'>
          {alertMessage}
        </div>
      )}
    </section>
  );
};

export default FlightBooking;
