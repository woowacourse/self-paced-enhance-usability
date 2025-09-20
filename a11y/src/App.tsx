import "./Typography.css";
import "./App.css";

import FlightBooking from "./components/FlightBooking";

function App() {
  return (
    <div className="app">
      <main className="app-main">
        <section className="flight-booking-container" aria-label="항공권 예매">
          <FlightBooking />
        </section>
      </main>
    </div>
  );
}

export default App;
