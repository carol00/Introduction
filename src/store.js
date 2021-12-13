import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/testSlice'
import rotateTitleReducer from './redux/rotateTitleSlice'
import introductionReducer from './redux/introductionSlice'
import familyReducer from './redux/familySlice'
import handMadeReducer from './redux/handMadeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rotateTitle: rotateTitleReducer,
    introduction: introductionReducer,
    family: familyReducer,
    handMade: handMadeReducer
  },
})