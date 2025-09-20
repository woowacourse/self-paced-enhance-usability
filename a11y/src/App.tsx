import './Typography.css';
import './App.css';

import FlightBooking from './components/FlightBooking';

function App() {
  return (
    <main className="app">
      <section className="app-main">
        <div className="flight-booking-container">
          <FlightBooking />
        </div>
      </section>
    </main>
  );
}

export default App;
