import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

const router = express.Router();

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send({ message: 'hello' });
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send({ message: 'hello' });
});

app
  .route('/data')
  .get((req, res) => {
    res.send({ message: 'Hello' });
  })
  .post((req, res) => {
    res.send(req.body);
  });

// app.get('/data', (req, res) => {
//   res.send({ message: 'Hello' });
// });

// app.post('/data', (req, res) => {
//   res.send(req.body);
// });

export const start = () => {
  app.listen(3000, () => console.log('Server listening on 3000'));
};
