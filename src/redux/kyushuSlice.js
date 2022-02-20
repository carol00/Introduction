import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPhotoData = createAsyncThunk(
  'kyushu',
  async () => {
    const res = await axios.get('../../list.json')
    return res.data
  }
)

export const kyushuSlice = createSlice({
  name: 'kyushu',
  initialState: {
    groupPic: [],
    park: [],
    landscape: [],
    aquarium: [],
    pearl: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPhotoData.fulfilled, (state, action) => {        
        state.groupPic = action.payload.trvel.groupPic
        state.park = action.payload.trvel.park
        state.landscape = action.payload.trvel.landscape
        state.aquarium = action.payload.trvel.aquarium
        state.pearl = action.payload.trvel.pearl
      }
    )
  }
})

export default kyushuSlice.reducer