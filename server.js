const express = require('express');
const app = express();
const path = require('path');

app.get("/", (req, res) => {
  res.send('Goodbye from Cloud Run!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server listening on port ${PORT}...');
});
