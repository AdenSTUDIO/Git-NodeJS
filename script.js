const express = require('express');
const app = express();
const port = process.env.PORT || 8888; // GITHUB Commit

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port);