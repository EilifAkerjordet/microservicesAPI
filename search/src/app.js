const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (_, res) => {
  res.json({msg: 'search'});
});

app.get('/api/search', async(req, res) => {
  const videoPromise = fetch('http://videoes:3000/api/videoes');
  const bookPromise = fetch('http://books:3000/api/books');
  const promises = [videoPromise, bookPromise];
  const [videoResponse, bookResponse] = await Promise.all(promises);
  const videoJson = await videoResponse.json();
  const bookJson = await bookResponse.json();

  res.json({videoes: videoJson, book: bookJson });
});

app.post('/api/search', async(req, res) => {
  try {
    const bookPromise = fetch('http://books:3000/api/books', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name: req.body.name }),
    });
    const videoPromise = fetch('http://videoes:3000/api/videoes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name: req.body.name }),
    });
    await Promise.all([bookPromise, videoPromise]);
    res.status(200).end();
  } catch(e) {
    console.log(e);
    res.status(500).end();
  }
});

module.exports = app;
