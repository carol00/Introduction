import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const fetchTitleData  = createAsyncThunk(
  'introduction',
  async () => {
    const response = await axios.get('../../list.json')
    return response.data
  }
)

export const introductionSlice = createSlice({
  name: 'introduction',
  initialState: {
    titleData: [] 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTitleData.fulfilled, (state, action) => {
        state.titleData = action.payload.titleData
      }
    )
  }
})

export default introductionSlice.reducer