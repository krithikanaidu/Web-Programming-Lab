import { useState, useEffect } from 'react';

// Task 2: React component that displays current date and time
function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>Current Date and Time:</h3>
      <p style={{ fontSize: '24px', color: '#61dafb' }}>
        {dateTime.toLocaleString()}
      </p>
    </div>
  );
}

export default DateTimeDisplay;
