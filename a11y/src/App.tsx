import './Typography.css';
import './App.css';

import FlightBooking from './components/FlightBooking';

function App() {
  return (
    <div className='app'>
      <div className='app-main'>
        <section className='flight-booking-container'>
          <FlightBooking />
        </section>
      </div>
    </div>
  );
}

export default App;
