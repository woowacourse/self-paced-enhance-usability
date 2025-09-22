import "./Typography.css";
import "./App.css";

import FlightBooking from "./components/FlightBooking";

function App() {
  return (
    <main className="app">
      <div className="app-main">
        <section className="flight-booking-container">
          <FlightBooking />
        </section>
      </div>
    </main>
  );
}

export default App;
