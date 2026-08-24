let users = [
  { id: 1, name: 'Ana Silva', email: 'ana@example.com' },
  { id: 2, name: 'Carlos Oliveira', email: 'carlos@example.com' }
];

const generateId = () => (users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1);

const getUsers = (req, res) => res.status(200).json(users);

const getUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find((item) => item.id === id);
  if (!user) return res.status(404).json({ error: { code: 'USER_NOT_FOUND', message: 'Usuário não encontrado.' } });
  return res.status(200).json(user);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: { code: 'MISSING_FIELDS', message: 'Os campos "name" e "email" são obrigatórios.' } });
  }
  const newUser = { id: generateId(), name: name.trim(), email: email.toLowerCase().trim() };
  users.push(newUser);
  return res.status(201).json({ message: 'Usuário cadastrado com sucesso.', data: newUser });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name, email } = req.body;
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1) return res.status(404).json({ error: { code: 'USER_NOT_FOUND', message: 'Usuário não encontrado.' } });
  if (!name || !email) return res.status(400).json({ error: { code: 'MISSING_FIELDS', message: 'Campos obrigatórios ausentes.' } });
  users[userIndex] = { id, name, email };
  return res.status(200).json(users[userIndex]);
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1) return res.status(404).json({ error: { code: 'USER_NOT_FOUND', message: 'Usuário não encontrado.' } });
  users.splice(userIndex, 1);
  return res.status(200).json({ message: 'Usuário removido com sucesso.' });
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
