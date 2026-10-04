import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState(null);

  const handleClick = (value) => {
    if (display === '0' && value !== '.') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  const clear = () => setDisplay('0');

  const memoryAdd = () => setMemory(parseFloat(display) || 0);
  const memoryRecall = () => setDisplay(memory?.toString() || '0');
  const memoryClear = () => setMemory(null);

  return (
    <div style={{ maxWidth: '300px', margin: '20px auto', padding: '20px', border: '1px solid #4b5563', borderRadius: '8px', backgroundColor: '#1f2937', color: '#f9fafb' }}>
      <h3>Calculator</h3>
      <input value={display} readOnly style={{ width: '100%', padding: '10px', marginBottom: '10px', fontSize: '18px', textAlign: 'right', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map(btn => (
          <button key={btn} onClick={() => btn === '=' ? calculate() : handleClick(btn)} style={{ padding: '15px', fontSize: '16px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563', cursor: 'pointer' }}>
            {btn}
          </button>
        ))}
        <button onClick={clear} style={{ gridColumn: 'span 2', padding: '15px', backgroundColor: '#dc2626', color: '#f9fafb', border: 'none', cursor: 'pointer' }}>C</button>
        <button onClick={memoryAdd} style={{ padding: '15px', backgroundColor: '#059669', color: '#f9fafb', border: 'none', cursor: 'pointer' }}>M+</button>
        <button onClick={memoryRecall} style={{ padding: '15px', backgroundColor: '#059669', color: '#f9fafb', border: 'none', cursor: 'pointer' }}>MR</button>
        <button onClick={memoryClear} style={{ gridColumn: 'span 4', padding: '15px', backgroundColor: '#dc2626', color: '#f9fafb', border: 'none', cursor: 'pointer' }}>MC</button>
      </div>
    </div>
  );
}
