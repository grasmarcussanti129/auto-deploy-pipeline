const express = require('express');
const app = express();
const config = require('./config.json');

app.get('/', (req, res) => {
  res.send('Auto Deploy Pipeline is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});