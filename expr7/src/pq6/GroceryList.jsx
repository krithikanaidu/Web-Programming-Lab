import { useState } from 'react';

export default function GroceryList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const addItem = () => {
    if (!input.trim()) return;
    setItems([...items, { id: Date.now(), text: input, bought: false }]);
    setInput('');
  };

  const deleteItem = (id) => setItems(items.filter(i => i.id !== id));

  const toggleBought = (id) => setItems(items.map(i => i.id === id ? { ...i, bought: !i.bought } : i));

  const startEdit = (item) => { setEditingId(item.id); setEditText(item.text); };

  const saveEdit = () => {
    setItems(items.map(i => i.id === editingId ? { ...i, text: editText } : i));
    setEditingId(null);
  };

  const sortItems = () => setItems([...items].sort((a, b) => a.text.localeCompare(b.text)));

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #4b5563', borderRadius: '8px', backgroundColor: '#1f2937', color: '#f9fafb' }}>
      <h3>Grocery List</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add item" style={{ flex: 1, padding: '8px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }} />
        <button onClick={addItem} style={{ padding: '8px 15px', backgroundColor: '#8b5cf6', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add</button>
      </div>
      <button onClick={sortItems} style={{ marginBottom: '15px', padding: '8px 15px', backgroundColor: '#059669', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Sort A-Z</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #4b5563', textDecoration: item.bought ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={item.bought} onChange={() => toggleBought(item.id)} style={{ marginRight: '10px' }} />
            {editingId === item.id ? (
              <>
                <input value={editText} onChange={(e) => setEditText(e.target.value)} style={{ flex: 1, marginRight: '10px', padding: '5px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }} />
                <button onClick={saveEdit} style={{ padding: '5px 10px', marginRight: '5px', backgroundColor: '#059669', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
              </>
            ) : (
              <>
                <span style={{ flex: 1, marginRight: '10px' }}>{item.text}</span>
                <button onClick={() => startEdit(item)} style={{ padding: '5px 10px', marginRight: '5px', backgroundColor: '#8b5cf6', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
              </>
            )}
            <button onClick={() => deleteItem(item.id)} style={{ padding: '5px 10px', backgroundColor: '#dc2626', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
