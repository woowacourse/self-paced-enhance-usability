import "./FlightBooking.css";
import { useCounter } from "../hooks/useCounter";

const MIN_PASSENGERS = 1;
const MAX_PASSENGERS = 3;

const ALERT_MESSAGE = {
  min: "최소 승객 수에 도달했습니다.",
  max: "최대 승객 수에 도달했습니다.",
};

const FlightBooking = () => {
  const {
    count: adultCount,
    alertMessage,
    decrementCount,
    incrementCount,
  } = useCounter({
    min: {
      value: MIN_PASSENGERS,
      alertMessage: ALERT_MESSAGE.min,
    },
    max: {
      value: MAX_PASSENGERS,
      alertMessage: ALERT_MESSAGE.max,
    },
  });

  return (
    <article className="flight-booking">
      <h1 className="heading-2-text">항공권 예매</h1>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <section className="counter">
          <button className="button-text" onClick={decrementCount} aria-label="성인 승객 감소">
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button className="button-text" onClick={incrementCount} aria-label="성인 승객 증가">
            +
          </button>
        </section>
        {alertMessage && (
          <span className="visually-hidden" role="alert">
            {alertMessage}
          </span>
        )}
      </div>
      <button className="search-button">항공편 검색</button>
    </article>
  );
};

export default FlightBooking;
