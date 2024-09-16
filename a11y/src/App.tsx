import './Typography.css';
import './App.css';

import FlightBooking from './components/FlightBooking';

function App() {
  return (
    <div className='app'>
      <main className='app-main'>
        <article className='flight-booking-container'>
          <header>
            <h1 className='heading-1-text'>Wooteco Air</h1>
          </header>
          <FlightBooking />
        </article>
      </main>
    </div>
  );
}

export default App;
