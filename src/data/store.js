import { configureStore } from '@reduxjs/toolkit'
import { FrontEndSlice } from './Slices/FrontEndSide'
import { BackEndSlice } from './Slices/BackEndSide'

export const store = configureStore({
  reducer: {
    FrontEndData: FrontEndSlice.reducer,
    BackEndData: BackEndSlice.reducer
  },
})