import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './view/testView/testSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})