// server.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Mini App</h1>');
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Hello World' });
});
