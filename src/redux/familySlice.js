import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPhotoData = createAsyncThunk(
  'family',
  async () => {
    const res = await axios.get('../../list.json')
    return res.data
  }
)

export const familySlice = createSlice({
  name: 'family',
  initialState: {
    photo: [],
    avatar: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPhotoData.fulfilled, (state, action) => {
        state.photo = action.payload.family.lifePhotoData
        state.avatar = action.payload.family.avatar
      }
    )
  }
})

export default familySlice.reducer