import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;
const MIN_PASSENGERS = 1;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [announcement, setAnnouncement] = useState("");

  const incrementCount = () => {
    setAdultCount((prev) => {
      if (prev < MAX_PASSENGERS) {
        const newValue = prev + 1;
        setAnnouncement(`성인 승객 증가 ${newValue}`);
        return newValue;
      } else {
        setAnnouncement("최대 승객 수에 도달하였습니다.");
        return prev;
      }
    });
  };

  const decrementCount = () => {
    setAdultCount((prev) => {
      if (prev > MIN_PASSENGERS) {
        const newValue = prev - 1;
        setAnnouncement(`성인 승객 감소 ${newValue}`);
        return newValue;
      } else {
        // 필요하다면 최소 안내도 추가 가능
        setAnnouncement("최소 1명의 승객이 필요합니다.");
        return prev;
      }
    });
  };

  return (
    <section className="flight-booking">
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <div className="counter">
          <button className="button-text" onClick={decrementCount} aria-label="성인 승객 감소" aria-live="polite">
            -
          </button>
          <span>{adultCount}</span>
          <button className="button-text" onClick={incrementCount} aria-label="성인 승객 증가" aria-live="polite">
            +
          </button>
        </div>
      </div>
      <button className="search-button">항공편 검색</button>

      {/* 스크린리더 전용 안내 영역 */}
      <div
        aria-live="assertive"
        aria-atomic="true"
        className="visually-hidden"
      >
        {announcement}
      </div>
    </section>
  );
};

export default FlightBooking;
