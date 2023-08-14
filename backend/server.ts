import path from 'path';
import express from 'express';

const { PORT = 3001 } = process.env;
const FRONT_END_DIST = path.join(__dirname, '../../frontend/dist');
const app = express();

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
  res.send(req.query);
});

app.listen(PORT, () => {
  console.log(`Server listening @ http://localhost:${PORT}`);
});
