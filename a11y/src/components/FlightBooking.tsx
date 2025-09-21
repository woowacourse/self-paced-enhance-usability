import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
	const [adultCount, setAdultCount] = useState(1);
	const [message, setMessage] = useState("");

	const incrementCount = () => {
		setAdultCount((prev) => {
			if (prev >= MAX_PASSENGERS) {
				setMessage("최대 승객 수에 도달했습니다.");
				return prev;
			}
			return prev + 1;
		});
	};

	const decrementCount = () => {
		setAdultCount((prev) => {
			if (prev <= 1) {
				setMessage("최소 1명의 승객이 필요합니다.");
				return prev;
			}
			return prev - 1;
		});
	};

	return (
		<div className="flight-booking">
			<h2 className="heading-2-text">항공권 예매</h2>
			<div className="passenger-count">
				<span className="body-text">성인</span>
				<div className="counter">
					<button
						type="button"
						className="button-text"
						onClick={decrementCount}
						aria-label="성인 승객 감소"
					>
						-
					</button>
					<output>{adultCount}</output>
					<button
						type="button"
						className="button-text"
						onClick={incrementCount}
						aria-label="성인 승객 증가"
					>
						+
					</button>
					<div role="alert" className="visually-hidden">
						{message}
					</div>
				</div>
			</div>
			<button type="button" className="search-button">
				항공편 검색
			</button>
		</div>
	);
};

export default FlightBooking;
