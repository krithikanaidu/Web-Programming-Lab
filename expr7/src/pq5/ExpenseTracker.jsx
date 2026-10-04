import { useState } from 'react';

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [type, setType] = useState('expense');
  const [filter, setFilter] = useState('all');

  const addTransaction = () => {
    if (!description || !amount) return;
    setTransactions([...transactions, { id: Date.now(), description, amount: parseFloat(amount), category, type }]);
    setDescription('');
    setAmount('');
  };

  const deleteTransaction = (id) => setTransactions(transactions.filter(t => t.id !== id));

  const filtered = filter === 'all' ? transactions : transactions.filter(t => t.category === filter);
  const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  const balance = income - expenses;

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #4b5563', borderRadius: '8px', backgroundColor: '#1f2937', color: '#f9fafb' }}>
      <h3>Expense Tracker</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', padding: '15px', backgroundColor: '#374151', borderRadius: '5px' }}>
        <div>Income: <span style={{ color: '#10b981' }}>${income.toFixed(2)}</span></div>
        <div>Expenses: <span style={{ color: '#ef4444' }}>${expenses.toFixed(2)}</span></div>
        <div>Balance: <strong>${balance.toFixed(2)}</strong></div>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" style={{ width: '100%', padding: '8px', marginBottom: '10px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }} />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" style={{ width: '100%', padding: '8px', marginBottom: '10px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }} />
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '48%', padding: '8px', marginRight: '4%', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }}>
          <option>Food</option><option>Rent</option><option>Transport</option><option>Entertainment</option><option>Other</option>
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)} style={{ width: '48%', padding: '8px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }}>
          <option value="expense">Expense</option><option value="income">Income</option>
        </select>
        <button onClick={addTransaction} style={{ width: '100%', marginTop: '10px', padding: '10px', backgroundColor: '#8b5cf6', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Transaction</button>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ padding: '8px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }}>
          <option value="all">All</option><option>Food</option><option>Rent</option><option>Transport</option><option>Entertainment</option><option>Other</option>
        </select>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtered.map(t => (
          <li key={t.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #4b5563' }}>
            <span>{t.description} ({t.category})</span>
            <span style={{ color: t.type === 'income' ? '#10b981' : '#ef4444' }}>
              {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
            </span>
            <button onClick={() => deleteTransaction(t.id)} style={{ marginLeft: '10px', padding: '2px 8px', backgroundColor: '#dc2626', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
