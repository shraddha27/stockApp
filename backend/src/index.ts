import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import stockRoutes from './routes/stock';
import {pollData} from './polling';

dotenv.config();

const app = express();
const PORT = 5000;

setInterval(pollData, 5000);

mongoose.connect("mongodb+srv://shraddhabandekar:Prema%40270985@cluster0.9fvs5fl.mongodb.net/")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(express.json());
app.use('/api/stocks', stockRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


