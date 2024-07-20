import { Request, Response } from 'express';
import { getStockDataFromDB, getStockDataFromAPI } from '../services/stockService';

export const getStockData = async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    const data = await getStockDataFromDB(symbol);
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
