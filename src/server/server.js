import React from 'react';
import App from '../components/App'
import ReactDOMServer from 'react-dom/server'

const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
  const name = 'Pirulito';

  const content = ReactDOMServer.renderToString(<App />);

  res.send(`
  <!doctype html>
    <html>
    <head>
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
      <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom-server.browser.development.js"></script>
    </head>
    <body>
    <div id="root">${content}</div>
    <script src="/main.js"></script>
  </body>
  </html>
  `);
});

app.get('/main.js', (req, res) => res.sendFile(path.join(__dirname, '../../main.js')));

app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});
