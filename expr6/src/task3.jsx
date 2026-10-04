import { useState } from 'react';

// Task 3: React component that displays greeting based on user input
function GreetingApp() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleGreeting = () => {
    if (name.trim()) {
      setGreeting(`Hello, ${name}! Welcome to React!`);
    } else {
      setGreeting('Please enter your name!');
    }
  };

  return (
    <div>
      <h3>Enter your name:</h3>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          fontSize: '16px',
          marginRight: '10px',
          width: '200px'
        }}
      />
      <button
        onClick={handleGreeting}
        style={{
          backgroundColor: '#61dafb',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Greet
      </button>
      {greeting && (
        <p style={{ marginTop: '20px', fontSize: '20px', color: '#61dafb' }}>
          {greeting}
        </p>
      )}
    </div>
  );
}

export default GreetingApp;
