import { useState, useEffect, useRef } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => setTime(t => t + 10), 10);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
  };

  const addLap = () => setLaps([...laps, time]);

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #4b5563', borderRadius: '8px', textAlign: 'center', backgroundColor: '#1f2937', color: '#f9fafb' }}>
      <h3>Stopwatch</h3>
      <div style={{ fontSize: '48px', fontFamily: 'monospace', margin: '20px 0' }}>{formatTime(time)}</div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        <button onClick={() => setIsRunning(!isRunning)} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#8b5cf6', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => { setTime(0); setIsRunning(false); setLaps([]); }} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#dc2626', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Reset
        </button>
        <button onClick={addLap} disabled={!isRunning} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#059669', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Lap
        </button>
      </div>
      {laps.length > 0 && (
        <div style={{ maxHeight: '200px', overflowY: 'auto', textAlign: 'left' }}>
          <h4>Laps:</h4>
          {laps.map((lap, i) => (
            <div key={i} style={{ padding: '5px', borderBottom: '1px solid #4b5563' }}>
              Lap {i + 1}: {formatTime(lap)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
