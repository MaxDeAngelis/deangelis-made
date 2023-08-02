import path from 'path';
import express from 'express';

const { PORT = 3001 } = process.env;

const app = express();

app.use('/', express.static(path.join(__dirname, '../../frontend/dist')));

app.listen(PORT, () => {
  console.log(`Server listening @ http://localhost:${PORT}`);
});
