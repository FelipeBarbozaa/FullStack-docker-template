import express from 'express';
import 'express-async-errors';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/teste', (req, res) => res.send('okay'));

export default app;
