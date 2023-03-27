import React from 'react';
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  
  isOpenDescription: false,
  viewGridNews: true
}
 
const appSlice = createSlice({
  name: 'appstore',
  initialState,
  reducers: {
    switchPopupDescription: state => {
      state.isOpen = !state.isOpen;
    },
    switchViewNews: (state,action)=>{
        state.viewGridNews = action.payload;
    }
  },
})


export default appSlice;