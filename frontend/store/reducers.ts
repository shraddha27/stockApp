import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StockState {
  data: any[];
}

const initialState: StockState = {
  data: [],
};

const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<any[]>) {
      state.data = action.payload;
    },
  },
});

export const { setData } = stockSlice.actions;
export default stockSlice.reducer;
