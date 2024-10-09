import { useId, useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;
const MIN_PASSENGERS = 1;
const STEP = 1;

const COUNT_ERROR_MESSAGE = {
  min: "최소 승객 수에 도달했습니다",
  max: "최대 승객 수에 도달했습니다",
};

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(MIN_PASSENGERS);
  const [countError, setCountError] = useState<
    keyof typeof COUNT_ERROR_MESSAGE | undefined
  >(undefined);

  const formId = `passenger-count-form-${useId()}`;

  const updateCountError = (count: number) => {
    if (count > MAX_PASSENGERS) {
      return setCountError("max");
    }
    if (count < MIN_PASSENGERS) {
      return setCountError("min");
    }
    return setCountError(undefined);
  };

  const incrementCount = () => {
    setAdultCount(prev => {
      const newCount = prev + STEP;
      updateCountError(newCount);

      return Math.min(MAX_PASSENGERS, newCount);
    });
  };

  const decrementCount = () => {
    setAdultCount(prev => {
      const newCount = prev - STEP;
      updateCountError(newCount);

      return Math.max(MIN_PASSENGERS, newCount);
    });
  };

  return (
    <section className="flight-booking">
      <h1 className="heading-1-text">항공권 예매</h1>
      <form id={formId} className="passenger-count">
        <h2 className="body-text">성인</h2>
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
      <div className="count-error-message-wrapper">
        <p className={countError ? "" : "visually-hidden"} role="status">
          {countError && COUNT_ERROR_MESSAGE[countError]}
        </p>
      </div>

      <button form={formId} type="submit" className="search-button">
        항공편 검색
      </button>
    </section>
  );
};

export default FlightBooking;
