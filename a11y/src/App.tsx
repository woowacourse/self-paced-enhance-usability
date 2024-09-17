import "./Typography.css";
import "./App.css";

import FlightBooking from "./components/FlightBooking";

function App() {
  return (
    <main className="app">
      <section className="flight-booking-container">
        <FlightBooking />
      </section>
    </main>
  );
}

export default App;
