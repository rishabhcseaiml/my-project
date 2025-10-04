const express = require('express');
const app = express();
const PORT = 3000;
const SECRET_TOKEN = 'mysecrettoken';

const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];

  if (token && token === SECRET_TOKEN) {
    next();
  } else {
    return res.status(401).json({ message: 'Authorization header missing or incorrect' });
  }
};

app.use(requestLogger);

app.get('/public', (req, res) => {
  res.status(200).send('This is a public route. No authentication required.');
});

app.get('/protected', authenticateToken, (req, res) => {
  res.status(200).send('You have accessed a protected route with a valid Bearer token!');
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});
