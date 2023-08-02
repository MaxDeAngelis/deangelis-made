import path from 'path';
import express from 'express';

const { PORT = 3001 } = process.env;
const FRONT_END_DIST = path.join(__dirname, '../../frontend/dist');
const app = express();

app.use('/', express.static(FRONT_END_DIST));
app.use('*', (req, res) =>
  res.sendFile(path.join(FRONT_END_DIST, 'index.html')),
);

app.listen(PORT, () => {
  console.log(`Server listening @ http://localhost:${PORT}`);
});
