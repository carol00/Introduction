import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/testSlice'
import rotateTitleReducer from './redux/rotateTitleSlice'
import introductionReducer from './redux/introductionSlice'
import familyReducer from './redux/familySlice'
import handMadeReducer from './redux/handMadeSlice'
import switcherReducer from './redux/switcherSlice'
import cloudAmountReducer from './redux/cloudAmountSlice'
import kyushuReducer from './redux/kyushuSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rotateTitle: rotateTitleReducer,
    introduction: introductionReducer,
    family: familyReducer,
    handMade: handMadeReducer,
    switcher: switcherReducer,
    cloudAmount: cloudAmountReducer,
    kyushu: kyushuReducer,
  },
})