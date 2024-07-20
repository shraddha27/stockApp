import axios from 'axios';
import Stock from '../models/Stock';

export const getStockDataFromAPI = async (symbols: string[]) => {
 // const response = await axios.get(process.env.API_URL!);
  const headers = {
    'content-type': 'application/json',
    'x-api-key': "fcc6e24e-6bbf-47f6-8aaa-aa879ac621fb"
  };

  interface CryptoData {
    symbol: string;
    price: number;
  }

  const DataArr: CryptoData[] = [];

  for (const symbol of symbols) {
    const data = {
      currency: 'USD',
      code: symbol
    };

    try {
      const response = await axios.post("https://api.livecoinwatch.com/coins/single", data, { headers });
      const {rate} = response.data;
      DataArr.push({
        //currency: 'USD',
        symbol: symbol,
        price: rate
      });

    } catch (error) {
      console.error(`Error fetching data for ${symbol}`, error);
    }
  }
  console.log(DataArr);
  return DataArr;
};

export const getStockDataFromDB = async (symbol: string) => {
  return await Stock.find({ symbol }).sort({ date: -1 }).limit(20);
};

export const saveStockData = async (data: any) => {

  try{
    const stock = new Stock({
      symbol: data.symbol,
      price: data.price,
      date: new Date()
    });
    await stock.save();
  }catch(e){
    console.log(e);
  }

};
