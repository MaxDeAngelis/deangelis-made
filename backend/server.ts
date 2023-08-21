/* eslint-disable no-underscore-dangle */
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Recipe from './Models/recipe';

const { PORT = 3001 } = process.env;
const FRONT_END_DIST = path.join(__dirname, '../../frontend/dist');
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/deangelismade');

app.use(bodyParser.json());
app.use(express.static(FRONT_END_DIST));

const redirectToMain = (
  req: any,
  res: { sendFile: (arg0: string) => void },
) => {
  res.sendFile(path.join(FRONT_END_DIST, 'index.html'));
};

app.get('/', redirectToMain);
app.get('/recipe/*', redirectToMain);
app.get('/search', redirectToMain);

app.get('/api/recipe', (req, res) => {
  Recipe.findOne({ url: req.query.id }).then((doc) => {
    res.send(doc);
  });
});

app.get('/api/recents', (req, res) => {
  Recipe.find()
    .sort({ createdAt: -1 })
    .limit(5)
    .then((docs) => {
      res.send(docs);
    });
});

app.post('/api/save', ({ body: recipe }, res) => {
  Recipe.updateOne({ _id: recipe._id }, recipe)
    .catch(() => res.status(500))
    .finally(() => res.send(recipe));
});

app.listen(PORT, () => {
  console.log(`Server listening @ http://localhost:${PORT}`);
});
