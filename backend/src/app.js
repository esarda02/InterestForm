import express from 'express';
import cors from 'cors';
import connectDB from './services/db.js';
import routes from './routes/index.js';
import { PORT } from './constants.js';

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Use routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
