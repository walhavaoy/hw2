import express from 'express';
import { homeHandler } from './routes/home.js';
import { greetingHandler } from './routes/greeting.js';

const app = express();

app.get('/', homeHandler);
app.get('/api/greeting', greetingHandler);

export { app };
