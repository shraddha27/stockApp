import { getStockDataFromAPI, saveStockData } from './services/stockService';

export const pollData = async () => {
  try {
    const data = await getStockDataFromAPI(["BTC","ETH","ADA","BCH","LTC","UNI"]);
    for (const d of data) {
        await saveStockData(d);
    }
    console.log(data);
    console.log('Data saved');
  } catch (error) {
    console.error(error);
  }
};

//setInterval(pollData, 5000);
