import { createSlice } from '@reduxjs/toolkit'

export const cloudAmountSlice = createSlice({
  name: 'cloudAmount',
  initialState: {
    amount: 0
  },
  reducers: {
    addAmount: (state) => {
      state.amount += 1
    }
  }
})

export const { addAmount } = cloudAmountSlice.actions
export default cloudAmountSlice.reducer