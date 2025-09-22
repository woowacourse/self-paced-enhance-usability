import "./Typography.css";
import "./App.css";

import FlightBooking from "./components/FlightBooking";

function App() {
  return (
    <main className="app">
      <section className="app-main">
        <section className="flight-booking-container">
          <FlightBooking />
        </section>
      </section>
    </main>
  );
}

export default App;
