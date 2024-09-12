import "./Typography.css";
import "./App.css";

import FlightBooking from "./components/FlightBooking";

function App() {
  return (
    <div className="app">
      <div className="app-main">
        <div className="flight-booking-container">
          <FlightBooking />
        </div>
      </div>
    </div>
  );
}

export default App;
