import express from 'express';
import emailRoutes from './src/routes/email.router';
import stravaRoutes from './src/routes/strava.router';
import authRoutes from './src/routes/auth.router';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/email', emailRoutes);
app.use('/strava', stravaRoutes);
app.use('/', authRoutes);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

export default app;
