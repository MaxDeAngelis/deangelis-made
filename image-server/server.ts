import fs from 'fs';
import path from 'path';
import express from 'express';
import fileUpload from 'express-fileupload';

const IMAGE_DIR = path.join(__dirname, './images');
const app = express();
app.use(
  fileUpload({
    limits: {
      fileSize: 10000000,
    },
    abortOnLimit: true,
  }),
);
app.use(express.static(path.join(__dirname)));
app.post('/api/upload', (req, res) => {
  const { image } = <any>req.files;

  if (!image) return res.sendStatus(400);
  if (image.mimetype !== 'image/png') return res.sendStatus(400);

  if (!fs.existsSync(IMAGE_DIR)) {
    fs.mkdirSync(IMAGE_DIR);
  }
  image.mv(path.join(IMAGE_DIR, image.name));
  return res.sendStatus(200);
});

app.listen(80, () => {
  console.log(`Server listening @ http://localhost:80`);
});
