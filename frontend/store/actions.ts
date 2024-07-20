import axios from 'axios';
import { AppDispatch } from './store';
import { setData } from './reducers';

export const fetchData = (symbol: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`/api/stocks/${symbol}`);
    dispatch(setData(response.data));
  } catch (error) {
    console.error(error);
  }
};
