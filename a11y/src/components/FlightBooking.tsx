import { useState } from 'react';
import './FlightBooking.css';

const MAX_PASSENGERS = 3;
const MIN_PASSENGERS = 1;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [statusMessage, setStatusMessage] = useState(''); // 상태 메시지로 관리

  const incrementCount = () => {
    if (adultCount < MAX_PASSENGERS) {
      setAdultCount((prev) => prev + 1);
      setStatusMessage('');
    } else {
      setStatusMessage('최대 승객 수에 도달했습니다.');
    }
  };

  const decrementCount = () => {
    if (adultCount > MIN_PASSENGERS) {
      setAdultCount((prev) => prev - 1);
      setStatusMessage('');
    } else {
      setStatusMessage('최소 승객 수에 도달했습니다.');
    }
  };

  return (
    <div className='flight-booking'>
      <h2 className='heading-2-text'>항공권 예매</h2>
      <div className='passenger-count'>
        <span className='body-text'>성인</span>
        <div className='counter'>
          <button
            className='button-text'
            onClick={decrementCount}
            aria-label={`성인 승객 수 감소, 현재 ${adultCount}명`}
          >
            -
          </button>

          <span aria-live='polite'>{adultCount}</span>

          <button
            className='button-text'
            onClick={incrementCount}
            aria-label={`성인 승객 수 추가, 현재 ${adultCount}명`}
          >
            +
          </button>
        </div>
      </div>

      <div
        aria-live='assertive'
        role='status'
        className='visually-hidden'
      >
        {statusMessage}
      </div>

      <button className='search-button'>항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
