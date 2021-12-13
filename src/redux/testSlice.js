import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 10,
  init: 'test'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      // console.log('+++');
      // console.log('action:', action.payload);
      // console.log('state:', state.value);
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      // console.log('---');
      // console.log('by amount:', state);
      // console.log('by amount:', action);
      state.value += action.payload
    },
  }
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = amount => dispatch => {
  // console.log('async:', amount);
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export default counterSlice.reducer