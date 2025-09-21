import { useState } from 'react';

import './FlightBooking.css';

const MIN_COUNT = 1;
const MAX_COUNT = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [adultCountMessage, setAdultCountMessage] = useState('');

  const getLimitCountMessage = (count: number, prevCount: number) => {
    if (count === MAX_COUNT && prevCount === MAX_COUNT) {
      return '최대 승객 수에 도달했습니다.';
    }

    if (count === MIN_COUNT && prevCount === MIN_COUNT) {
      return '최소 승객 수에 도달했습니다.';
    }

    return '';
  };

  const incrementCount = () => {
    setAdultCount((prev) => {
      const next = Math.min(MAX_COUNT, prev + 1);
      const message = getLimitCountMessage(next, prev);
      setAdultCountMessage(message);
      return next;
    });
  };

  const decrementCount = () => {
    setAdultCount((prev) => {
      const next = Math.max(MIN_COUNT, prev - 1);
      const message = getLimitCountMessage(next, prev);
      setAdultCountMessage(message);
      return next;
    });
  };

  return (
    <section className='flight-booking'>
      <h2 className='heading-2-text'>항공권 예매</h2>
      <div className='passenger-count'>
        <span className='body-text'>성인</span>
        <p
          id='adult-count-message'
          className='adultCount-notice'
          aria-live='polite'
          role='status'
        >
          {adultCountMessage}
        </p>
        <div className='counter'>
          <button
            className='button-text'
            onClick={decrementCount}
            aria-label='성인 승객 감소'
          >
            -
          </button>
          <span aria-live='polite' role='status'>
            {adultCount}
          </span>
          <button
            className='button-text'
            onClick={incrementCount}
            aria-label='성인 승객 증가'
          >
            +
          </button>
        </div>
      </div>
      <button className='search-button'>항공편 검색</button>
    </section>
  );
};

export default FlightBooking;
