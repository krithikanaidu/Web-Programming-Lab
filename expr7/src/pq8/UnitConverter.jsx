import { useState } from 'react';

export default function UnitConverter() {
  const [category, setCategory] = useState('length');
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('ft');
  const [result, setResult] = useState('');

  const conversions = {
    length: { m: 1, ft: 3.28084, cm: 100, in: 39.3701 },
    weight: { kg: 1, lb: 2.20462, g: 1000, oz: 35.274 },
    volume: { l: 1, gal: 0.264172, ml: 1000, cup: 4.22675 }
  };

  const convert = () => {
    if (!value) return;
    const fromRate = conversions[category][fromUnit];
    const toRate = conversions[category][toUnit];
    const baseValue = parseFloat(value) / fromRate;
    setResult((baseValue * toRate).toFixed(4));
  };

  const unitOptions = {
    length: ['m', 'ft', 'cm', 'in'],
    weight: ['kg', 'lb', 'g', 'oz'],
    volume: ['l', 'gal', 'ml', 'cup']
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #4b5563', borderRadius: '8px', backgroundColor: '#1f2937', color: '#f9fafb' }}>
      <h3>Unit Converter</h3>
      <div style={{ marginBottom: '15px' }}>
        <label>Category: </label>
        <select value={category} onChange={(e) => { setCategory(e.target.value); setFromUnit(unitOptions[e.target.value][0]); setToUnit(unitOptions[e.target.value][1]); }} style={{ padding: '8px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }}>
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="volume">Volume</option>
        </select>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter value" style={{ width: '100%', padding: '8px', marginBottom: '10px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }} />
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} style={{ width: '48%', padding: '8px', marginRight: '4%', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }}>
          {unitOptions[category].map(u => <option key={u} value={u}>{u}</option>)}
        </select>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} style={{ width: '48%', padding: '8px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }}>
          {unitOptions[category].map(u => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <button onClick={convert} style={{ width: '100%', padding: '10px', marginBottom: '15px', backgroundColor: '#8b5cf6', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Convert</button>
      {result && (
        <div style={{ padding: '15px', backgroundColor: '#374151', borderRadius: '5px', textAlign: 'center' }}>
          <strong>{value} {fromUnit} = {result} {toUnit}</strong>
        </div>
      )}
    </div>
  );
}
