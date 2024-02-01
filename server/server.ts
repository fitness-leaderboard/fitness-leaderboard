import express from 'express';
import emailRoutes from './src/routes/email.router'
import stravaRoutes from './src/routes/strava.router';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(emailRoutes)
app.use(stravaRoutes);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

export default app;
