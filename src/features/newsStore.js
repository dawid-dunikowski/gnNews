import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {key} from '../data/data';


const initialState = {
  loading: false,
  news: [],
  viewGridNews: true,
  count: 0,
  error: ''
}
 
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (val='us')=>{
   
    const response = await  fetch(`https://newsapi.org/v2/top-headlines?country=${val}&apiKey=${key}`);
    return response.json();
  }
)

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    switchViewNews: (state,action)=>{
      state.viewGridNews = action.payload;
  }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending,(state)=>{
      state.loading = true;
    
    })
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload.articles;
      state.count = action.payload.articles.length;
      state.error = ''
    })
    builder.addCase(fetchNews.rejected,(state,action) => {
      state.loading = false
      state.news = []
      state.error = action.error.message
    })
  },
})

export const {switchViewNews} = newsSlice.actions;
export default newsSlice;

