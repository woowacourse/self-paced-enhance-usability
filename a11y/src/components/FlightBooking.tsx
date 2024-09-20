import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;
const MIN_PASSENGERS = 1;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [alert, setAlert] = useState('');

  const incrementCount = () => {
    if (adultCount >= MAX_PASSENGERS) {
      return setAlert('최대 승객 수에 도달했습니다.');
    }

    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
    setAlert('');
  };

  const decrementCount = () => {
    if (adultCount <= MIN_PASSENGERS) {
      return setAlert(`최소 승객 수는 ${MIN_PASSENGERS}명입니다.`);
    }

    setAdultCount((prev) => Math.max(MIN_PASSENGERS, prev - 1));
    setAlert('');
  };

  return (
    <div className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <div className="counter">
          <button
            className="button-text"
            onClick={decrementCount}
            aria-label="성인 승객 감소"
          >
            -
          </button>
          <span aria-live="polite">{adultCount}</span>

          <button
            className="button-text"
            onClick={incrementCount}
            aria-label="성인 승객 증가"
          >
            +
          </button>
        </div>
        {alert && (
          <span className="sr-only" role="alert" aria-live="assertive">
            {alert}
          </span>
        )}
      </div>
      <button className="search-button">항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
