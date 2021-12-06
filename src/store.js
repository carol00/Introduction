import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './view/testView/testSlice'
import rotateTitleReducer from './component/rotateTitle/rotateTitleSlice'
import introductionReducer from './view/introduction/introductionSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rotateTitle: rotateTitleReducer,
    introduction: introductionReducer
  },
})