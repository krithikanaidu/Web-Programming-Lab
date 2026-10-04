import { useState } from 'react';
import Calculator from './pq1/Calculator';
import TipCalculator from './pq2/TipCalculator';
import Stopwatch from './pq3/Stopwatch';
import WeatherApp from './pq4/WeatherApp';
import ExpenseTracker from './pq5/ExpenseTracker';
import GroceryList from './pq6/GroceryList';
import NotesApp from './pq7/NotesApp';
import UnitConverter from './pq8/UnitConverter';
import PasswordGenerator from './pq9/PasswordGenerator';
import QuizApp from './pq10/QuizApp';
import './App.css';

function App() {
  const [selectedPQ, setSelectedPQ] = useState(1);

  const components = {
    1: Calculator,
    2: TipCalculator,
    3: Stopwatch,
    4: WeatherApp,
    5: ExpenseTracker,
    6: GroceryList,
    7: NotesApp,
    8: UnitConverter,
    9: PasswordGenerator,
    10: QuizApp
  };

  const Component = components[selectedPQ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#f9fafb' }}>Experiment 7: React Practice Questions</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <label style={{ color: '#e5e7eb' }}>Select Practice Question: </label>
        <select value={selectedPQ} onChange={(e) => setSelectedPQ(Number(e.target.value))} style={{ padding: '8px', marginLeft: '10px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <option key={num} value={num}>PQ {num}</option>
          ))}
        </select>
      </div>
      <Component />
    </div>
  );
}

export default App;
