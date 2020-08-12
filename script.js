const express = require('express');
const app = express();
const port = process.env.PORT || 8888; // GITHUB Commit
app.use(express.static('public'));
app.use('/v', express.static('views'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.listen(port);