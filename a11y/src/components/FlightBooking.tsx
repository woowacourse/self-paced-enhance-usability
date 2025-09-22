import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [announcement, setAnnouncement] = useState("");

  const incrementCount = () => {
    const newCount = Math.min(MAX_PASSENGERS, adultCount + 1);
    setAdultCount(newCount);

    if (newCount === MAX_PASSENGERS) {
      setAnnouncement("최대 승객 수에 도달했습니다. 성인 승객 3명");
    } else {
      setAnnouncement(`성인 승객 ${newCount}명`);
    }
  };

  const decrementCount = () => {
    const newCount = Math.max(1, adultCount - 1);
    setAdultCount(newCount);

    if (newCount === 1) {
      setAnnouncement("최소 승객 수에 도달했습니다. 성인 승객 1명");
    } else {
      setAnnouncement(`성인 승객 ${newCount}명`);
    }
  };

  return (
    <article className="flight-booking">
      <header>
        <h1 className="heading-2-text">항공권 예매</h1>
      </header>
      <form>
        <fieldset className="passenger-count">
          <legend className="body-text">성인</legend>
          <div className="counter">
            <button
              type="button"
              className="button-text"
              onClick={decrementCount}
              aria-label="성인 승객 수 감소"
              disabled={adultCount <= 1}
            >
              -
            </button>
            <span aria-live="polite" aria-label={`현재 성인 승객 ${adultCount}명`}>{adultCount}</span>
            <button
              type="button"
              className="button-text"
              onClick={incrementCount}
              aria-label="성인 승객 수 증가"
              disabled={adultCount >= MAX_PASSENGERS}
            >
              +
            </button>
          </div>
        </fieldset>
        <button type="submit" className="search-button">항공편 검색</button>
      </form>
      <div aria-live="assertive" aria-atomic="true" role="status" className="sr-only">
        {announcement}
      </div>
    </article>
  );
};

export default FlightBooking;
