import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import axios from 'axios';
import FormData from 'form-data';
import { OAuth2Client } from 'google-auth-library';
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import Recipe from './Models/recipe';

declare module 'express-session' {
  export interface SessionData {
    user?: {
      name: string | undefined;
      picture: string | undefined;
    };
  }
}

const imageDataURI = require('image-data-uri');

const FRONT_END_DIST = path.join(__dirname, '../../frontend/dist');
const app = express();

const {
  DB_USER,
  DB_PASSWORD,
  DB_IP,
  PORT,
  IMAGE_SERVER = '',
  VITE_GOOGLE_CLIENT_ID,
} = process.env;
mongoose.connect(
  `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_IP}:27017/deangelismade`,
);

app.use(cookieParser());
app.use(
  session({ secret: 'deangelis-made', resave: true, saveUninitialized: true }),
);
app.use(bodyParser.json({ limit: '2mb' }));
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
app.get('/images/*', (req: any, res) => {
  axios
    .get(`${IMAGE_SERVER}${req.url}`, { responseType: 'arraybuffer' })
    .then(({ data }) => res.send(data))
    .catch(() => res.status(404).send('Image not found'));
});

app.get('/api/recipe', (req, res) => {
  if (req.query.id === 'create') {
    res.send(new Recipe());
  } else {
    Recipe.findOne({ url: req.query.id }).then((doc) => {
      res.send(doc);
    });
  }
});

app.get('/api/search', (req, res) => {
  Recipe.find({ name: { $regex: req.query.q, $options: 'i' } }).then((docs) => {
    res.send(docs);
  });
});

app.get('/api/recents', (req, res) => {
  Recipe.find()
    .sort({ createdAt: -1 })
    .limit(6)
    .then((docs) => {
      res.send(docs);
    });
});

app.post('/api/save', ({ body: recipe, session: reqSession }, res) => {
  if (reqSession.user) {
    let { image } = recipe;
    if (image.indexOf('data:') === 0) {
      const dataURI = image;
      image = `images/${recipe._id}.png`;

      imageDataURI
        .outputFile(dataURI, path.join(FRONT_END_DIST, image))
        .then((imagePath: any) => {
          const formData = new FormData();
          formData.append(
            'image',
            fs.createReadStream(imagePath),
            `${recipe._id}.png`,
          );
          axios
            .post(`${IMAGE_SERVER}/api/upload`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then(() => fs.unlinkSync(imagePath));
        });
    }

    const recipeToSave = {
      ...recipe,
      image,
      author: reqSession.user.name,
      url: recipe.name.replace(/ /g, '-').replace(/'/g, '').toLowerCase(),
    };
    Recipe.findByIdAndUpdate(recipe._id, recipeToSave, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    })
      .catch((error) => {
        console.error(error);
        res.status(500);
      })
      .finally(() => res.send(recipeToSave));
  } else {
    res.sendStatus(401);
  }
});

app.post('/api/login', async (req, res) => {
  const client = new OAuth2Client(VITE_GOOGLE_CLIENT_ID);
  const verified = await client.verifyIdToken({
    idToken: req.body.user,
    audience: VITE_GOOGLE_CLIENT_ID,
  });
  const payload = verified.getPayload();
  if (payload) {
    req.session.user = {
      name: payload.name,
      picture: payload.picture,
    };
  }
  res.send(payload);
});

app.get('/api/session', async (req, res) => {
  if (req.session.user) {
    res.send(req.session.user);
  } else {
    res.status(401).send({});
  }
});

app.listen(PORT, () => {
  console.log(`Server listening @ http://localhost:${PORT}`);
});
