import { useId, useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);

  const incrementCount = () => {
    setAdultCount(prev => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    setAdultCount(prev => Math.max(1, prev - 1));
  };

  const formId = `passenger-count-form-${useId()}`;

  return (
    <section className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <form id={formId} className="passenger-count">
        <h3 className="body-text">성인</h3>
        <div className="counter">
          <button
            type="button"
            className="button-text"
            aria-label="성인 승객 감소"
            onClick={decrementCount}
          >
            -
          </button>
          <output aria-live="polite" aria-atomic="false">
            {adultCount}
          </output>
          <button
            type="button"
            className="button-text"
            aria-label="성인 승객 증가"
            onClick={incrementCount}
          >
            +
          </button>
        </div>
      </form>
      <button form={formId} type="submit" className="search-button">
        항공편 검색
      </button>
    </section>
  );
};

export default FlightBooking;
