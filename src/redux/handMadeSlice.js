import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const fetchHandMadeData  = createAsyncThunk(
  'handMade',
  async () => {
    const response = await axios.get('../../list.json')
    return response.data
  }
)

export const handMadeSlice = createSlice({
  name: 'handMade',
  initialState: {
    herbarium: [],
    crystal: [],
    birthday: [],
    dog: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchHandMadeData.fulfilled, (state, action) => {
       state.herbarium = action.payload.handMade.herbarium
       state.crystal = action.payload.handMade.crystal
       state.birthday = action.payload.handMade.birthday
       state.dog = action.payload.handMade.dog
      }
    )
  }
})

export default handMadeSlice.reducer