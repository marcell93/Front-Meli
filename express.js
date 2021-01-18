const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const portNumber = 3000;
const sourceDir = 'dist';

app.use(express.static(sourceDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + `/dist/index.html`));
});

app.set('port', portNumber);

const server = http.createServer(app);
// eslint-disable-next-line no-console
server.listen(portNumber, () => console.log(`Running on port: ${portNumber}`));
