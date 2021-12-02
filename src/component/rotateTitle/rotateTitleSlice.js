import { createSlice } from "@reduxjs/toolkit"

export const rotateTitleSlice = createSlice({
  name: 'rotateTitle',
  initialState: {
    total: 0
  },
  reducers: {
    rotateTotal: (state) => {
      state.total += 1
    }
  }
})

export const { rotateTotal } = rotateTitleSlice.actions
export default rotateTitleSlice.reducer