import "./FlightBooking.css";

import useAdultCount from "../hooks/useAdultCount";

const FlightBooking = () => {
  const {
    adultCount,
    incrementCount,
    decrementCount,
    alertMessage,
    messageForATUser,
  } = useAdultCount();

  return (
    <div className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <div className="counter">
          <button
            className="button-text"
            onClick={decrementCount}
            aria-label="성인 탑승자 한 명 늘리기"
          >
            -
          </button>
          {messageForATUser && (
            <div
              className="visually-hidden"
              aria-live="polite"
              aria-atomic="true"
              aria-relevant="additions"
            >
              <p>{messageForATUser}</p>
            </div>
          )}
          <span>{adultCount}</span>
          <button
            className="button-text"
            onClick={incrementCount}
            aria-label="성인 탑승자 한 명 줄이기"
          >
            +
          </button>
        </div>
      </div>
      {alertMessage && (
        <div className="visually-hidden" role="alert">
          {alertMessage}
        </div>
      )}
      <button className="search-button">항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
