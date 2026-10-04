import './App.css';
import NameDisplay from './task1.jsx';          // Task 1: Name Display
// import DateTimeDisplay from './task2.jsx';   // Task 2: Date and Time
// import GreetingApp from './task3.jsx';        // Task 3: Greeting App
// import FavoriteFoods from './task4.jsx';       // Task 4: Favorite Foods
// import ButtonClick from './task5.jsx';        // Task 5: Button Click

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', borderRadius: '8px', marginTop: '20px' }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #61dafb', paddingBottom: '10px' }}>
        Experiment 6: React Application
      </h1>
      <NameDisplay />
    </div>
  );
}

export default App;
