// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});