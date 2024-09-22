import "./Typography.css";
import "./App.css";

import { FlightBooking } from "./components/index";

function App() {
  return (
    <div className="app">
      <main className="app-main">
        <div className="flight-booking-container">
          <FlightBooking />
        </div>
      </main>
    </div>
  );
}

export default App;
