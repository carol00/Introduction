import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './view/testView/testSlice'
import rotateTitleReducer from './component/rotateTitle/rotateTitleSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rotateTitle: rotateTitleReducer
  },
})