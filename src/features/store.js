import { configureStore } from '@reduxjs/toolkit'
import newsSlice from './newsStore';


export const store = configureStore({
  reducer: {
    news: newsSlice.reducer
  },
})

