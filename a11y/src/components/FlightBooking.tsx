import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [message, setMessage] = useState("");

  const incrementCount = () => {
    if (adultCount === MAX_PASSENGERS) {
      setMessage("최대 인원입니다");
      return;
    }
    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    if (adultCount === 1) {
      setMessage("최소 인원입니다");
      return;
    }
    setAdultCount((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className='flight-booking'>
      <h2 className='heading-2-text'>항공권 예매</h2>
      <div className='passenger-count'>
        <label className='body-text'>성인</label>
        <div className='counter'>
          <button
            className='button-text'
            onClick={decrementCount}
            aria-label='인원 수 줄이기'
          >
            -
          </button>
          <span aria-live='polite'>{adultCount}</span>
          <button
            className='button-text'
            onClick={incrementCount}
            aria-label='인원 수 늘리기'
          >
            +
          </button>
        </div>

        {message && (
          <div role='alert' className='visually-hidden'>
            {message}
          </div>
        )}
      </div>
      <button className='search-button'>항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
