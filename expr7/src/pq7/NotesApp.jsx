import { useState } from 'react';

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('Personal');
  const [editingId, setEditingId] = useState(null);
  const [filterTag, setFilterTag] = useState('all');

  const addNote = () => {
    if (!title.trim() || !content.trim()) return;
    setNotes([...notes, { id: Date.now(), title, content, tag }]);
    setTitle('');
    setContent('');
  };

  const deleteNote = (id) => setNotes(notes.filter(n => n.id !== id));

  const startEdit = (note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setTag(note.tag);
  };

  const saveEdit = () => {
    setNotes(notes.map(n => n.id === editingId ? { ...n, title, content, tag } : n));
    setEditingId(null);
    setTitle('');
    setContent('');
  };

  const filtered = filterTag === 'all' ? notes : notes.filter(n => n.tag === filterTag);

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #4b5563', borderRadius: '8px', backgroundColor: '#1f2937', color: '#f9fafb' }}>
      <h3>Notes App</h3>
      <div style={{ marginBottom: '15px' }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" style={{ width: '100%', padding: '8px', marginBottom: '10px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }} />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" style={{ width: '100%', padding: '8px', marginBottom: '10px', minHeight: '80px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }} />
        <select value={tag} onChange={(e) => setTag(e.target.value)} style={{ padding: '8px', marginRight: '10px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }}>
          <option>Personal</option><option>Work</option><option>Ideas</option><option>Tasks</option>
        </select>
        <button onClick={editingId ? saveEdit : addNote} style={{ padding: '8px 15px', backgroundColor: '#8b5cf6', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {editingId ? 'Update' : 'Add Note'}
        </button>
        {editingId && <button onClick={() => { setEditingId(null); setTitle(''); setContent(''); }} style={{ padding: '8px 15px', marginLeft: '10px', backgroundColor: '#6b7280', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>}
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Filter: </label>
        <select value={filterTag} onChange={(e) => setFilterTag(e.target.value)} style={{ padding: '8px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }}>
          <option value="all">All</option><option>Personal</option><option>Work</option><option>Ideas</option><option>Tasks</option>
        </select>
      </div>
      <div style={{ display: 'grid', gap: '15px' }}>
        {filtered.map(note => (
          <div key={note.id} style={{ padding: '15px', backgroundColor: '#374151', borderRadius: '5px', borderLeft: '4px solid #8b5cf6' }}>
            <h4>{note.title}</h4>
            <p style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '5px' }}>Tag: {note.tag}</p>
            <p>{note.content}</p>
            <button onClick={() => startEdit(note)} style={{ padding: '5px 10px', marginRight: '5px', backgroundColor: '#8b5cf6', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
            <button onClick={() => deleteNote(note.id)} style={{ padding: '5px 10px', backgroundColor: '#dc2626', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
