import { useEffect, useState } from "react";

import "./FlightBooking.css";
import ToastNotification from "./ToastNotification";

const MAX_PASSENGERS = 3;
const MIN_PASSENGERS = 1;

const PASSENGER_LIMIT_MESSAGE = {
  MAX: "최대 승객 수에 도달했습니다.",
  MIN: "최소 1명의 승객이 필요합니다.",
};

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [toastMessage, setToastMessage] = useState("");

  const incrementCount = () => {
    if (adultCount === MAX_PASSENGERS) {
      setToastMessage(PASSENGER_LIMIT_MESSAGE.MAX);
      return;
    }
    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    if (adultCount === MIN_PASSENGERS) {
      setToastMessage(PASSENGER_LIMIT_MESSAGE.MIN);
      return;
    }
    setAdultCount((prev) => Math.max(MIN_PASSENGERS, prev - 1));
  };

  useEffect(() => {
    if (toastMessage) {
      setTimeout(() => {
        setToastMessage("");
      }, 4000);
    }
  }, [toastMessage]);

  return (
    <div className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <div className="counter">
          <button className="button-text" onClick={decrementCount} aria-label="성인 승객 감소">
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button className="button-text" onClick={incrementCount} aria-label="성인 승객 증가">
            +
          </button>
        </div>
      </div>
      <button className="search-button">항공편 검색</button>
      {toastMessage && <ToastNotification message={toastMessage} />}
    </div>
  );
};

export default FlightBooking;
