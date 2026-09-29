import { useEffect, useState } from 'react';
import type { Reading } from '../lib/telemetry';

import './App.css';

function App() {
  const [data, setData] = useState<Reading[]>([]);

  // TODO:
  //
  // 1. Fetch telemetry data using fetchTelemetry()
  //
  // 2. Display the readings in a table
  //
  // 3. Show:
  //      Invalid Readings Detected: X
  //
  //    A reading is invalid when:
  //      speed < 0 OR speed > 150
  //
  // 4. Clearly identify which readings are invalid
  //
  // You do not need to spend significant time on styling.

  useEffect(() => {
    // Candidate implementation
  }, []);

  return (
    <main className="app">
      <h1>Telemetry Triage Dashboard</h1>

      <p className="description">
        Monitor incoming autonomous vehicle telemetry and identify physically
        invalid sensor readings.
      </p>

      {/* Candidate implementation */}
    </main>
  );
}

export default App;
