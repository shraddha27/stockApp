import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  date: { type: Date, default: Date.now }
}, { collection: 'stock-data' });

export default mongoose.model('Stock', stockSchema);
