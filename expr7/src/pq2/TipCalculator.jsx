import { useState } from 'react';

export default function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(1);

  const tipAmount = (bill * tip) / 100;
  const total = parseFloat(bill) + tipAmount;
  const perPerson = total / people;

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #4b5563', borderRadius: '8px', backgroundColor: '#1f2937', color: '#f9fafb' }}>
      <h3>Tip Calculator</h3>
      <div style={{ marginBottom: '15px' }}>
        <label>Bill Amount: $</label>
        <input type="number" value={bill} onChange={(e) => setBill(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Tip Percentage: {tip}%</label>
        <input type="range" min="0" max="30" value={tip} onChange={(e) => setTip(Number(e.target.value))} style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Number of People: </label>
        <input type="number" min="1" value={people} onChange={(e) => setPeople(Number(e.target.value))} style={{ width: '60px', padding: '8px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }} />
      </div>
      {bill && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#374151', borderRadius: '5px' }}>
          <p><strong>Tip Amount:</strong> ${tipAmount.toFixed(2)}</p>
          <p><strong>Total:</strong> ${total.toFixed(2)}</p>
          <p><strong>Per Person:</strong> ${perPerson.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
