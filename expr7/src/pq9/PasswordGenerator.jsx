import { useState } from 'react';

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUpper) chars += upper;
    if (includeLower) chars += lower;
    if (includeNumbers) chars += numbers;
    if (includeSpecial) chars += special;

    if (!chars) {
      setPassword('Select at least one option');
      return;
    }

    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied!');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #4b5563', borderRadius: '8px', backgroundColor: '#1f2937', color: '#f9fafb' }}>
      <h3>Password Generator</h3>
      <div style={{ marginBottom: '15px' }}>
        <label>Password Length: {length}</label>
        <input type="range" min="6" max="32" value={length} onChange={(e) => setLength(Number(e.target.value))} style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label><input type="checkbox" checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} /> Uppercase (A-Z)</label><br />
        <label><input type="checkbox" checked={includeLower} onChange={(e) => setIncludeLower(e.target.checked)} /> Lowercase (a-z)</label><br />
        <label><input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} /> Numbers (0-9)</label><br />
        <label><input type="checkbox" checked={includeSpecial} onChange={(e) => setIncludeSpecial(e.target.checked)} /> Special Characters (!@#$)</label>
      </div>
      <button onClick={generatePassword} style={{ width: '100%', padding: '10px', marginBottom: '15px', backgroundColor: '#8b5cf6', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Generate Password</button>
      {password && (
        <div style={{ padding: '15px', backgroundColor: '#374151', borderRadius: '5px', display: 'flex', gap: '10px' }}>
          <input value={password} readOnly style={{ flex: 1, padding: '8px', fontFamily: 'monospace', backgroundColor: '#1f2937', color: '#f9fafb', border: '1px solid #4b5563' }} />
          <button onClick={copyToClipboard} style={{ padding: '8px 15px', backgroundColor: '#059669', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Copy</button>
        </div>
      )}
    </div>
  );
}
