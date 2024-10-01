import { useState, useEffect } from "react";

import "./FlightBooking.css";
import Toast from "../Toast/Toast";

const MAX_PASSENGERS = 3;
const MIN_PASSENGERS = 1;

const STATUS_MESSAGE = {
  increase: "성인 승객 증가 ",
  decrease: "성인 승객 감소 ",
};

const ALERT_MESSAGE = {
  min: "최소 승객 수에 도달했습니다.",
  max: "최대 승객 수에 도달했습니다.",
};

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(MIN_PASSENGERS);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 1000 * 3);

      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const incrementCount = () => {
    setStatusMessage(STATUS_MESSAGE.increase);
    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));

    if (adultCount === MAX_PASSENGERS) {
      setToastMessage(ALERT_MESSAGE.max);
    }
  };

  const decrementCount = () => {
    setStatusMessage(STATUS_MESSAGE.decrease);
    setAdultCount((prev) => Math.max(MIN_PASSENGERS, prev - 1));

    if (adultCount === MIN_PASSENGERS) {
      setToastMessage(ALERT_MESSAGE.min);
    }
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
            aria-label={STATUS_MESSAGE.decrease}
          >
            -
          </button>
          <span aria-live="polite">
            <span className="visually-hidden">{statusMessage}</span>
            {adultCount}
          </span>
          <button
            className="button-text"
            onClick={incrementCount}
            aria-label={STATUS_MESSAGE.increase}
          >
            +
          </button>
        </div>
      </div>
      <button className="search-button">항공편 검색</button>
      {toastMessage && <Toast>{toastMessage}</Toast>}
    </div>
  );
};

export default FlightBooking;
