import { useState } from 'react';

// Task 5: React component with button that shows message on click
function ButtonClick() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <h3>Click the button below:</h3>
      <button
        onClick={() => setClicked(true)}
        style={{
          backgroundColor: '#61dafb',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '18px'
        }}
      >
        Click Me
      </button>
      {clicked && (
        <p
          style={{
            marginTop: '20px',
            fontSize: '24px',
            color: '#61dafb',
            fontWeight: 'bold'
          }}
        >
          Button Clicked!
        </p>
      )}
    </div>
  );
}

export default ButtonClick;
