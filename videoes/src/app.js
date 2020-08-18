const express = require('express');
const Video = require('./models/videoes_model');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (_, res) => {
  res.json({msg: 'videoes'});
});

app.get('/api/videoes', async (_, res) => {
  const videoes = await Video.find({});
  res.json(videoes);
});

app.post('/api/videoes', async (req, res) => {
  const video = new Video({name: req.body.name});
  const savedVideo = await video.save();
  res.json(savedVideo);
});

module.exports = app;
