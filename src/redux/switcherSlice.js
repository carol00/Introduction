import { createSlice } from "@reduxjs/toolkit"

export const switchSlice = createSlice({
  name: 'switcher',
  initialState: {
    light: false
  },
  reducers: {
    lightSwitcher: (state) => {
      state.light = !state.light
      
    }
  }
})

export const { lightSwitcher } = switchSlice.actions
export default switchSlice.reducer