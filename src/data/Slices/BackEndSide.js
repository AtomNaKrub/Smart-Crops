import { createSlice } from '@reduxjs/toolkit'

export const BackEndSlice = createSlice({
  name: 'BackEndData',
  initialState: {
    data: []
  },
  reducers: {
    addPlot: (state, action) => {
        state.data.push(action.payload)
    },
    deletePlot: (state, action) => {
      state.data.push(action.payload)
      console.log(state.data)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPlot, deletePlot } = BackEndSlice.actions
