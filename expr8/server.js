const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory "database"
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the User API! Use /users to manage users.');
});

// CREATE: Add a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// READ: Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// READ: Get a user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// UPDATE: Update a user by ID
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  const { name, email } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;
  res.json(user);
});

// DELETE: Remove a user by ID
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });
  users.splice(userIndex, 1);
  res.status(204).send();
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
