import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {key} from '../config/dataApp';


const initialState = {
  loading: false,
  news: [],
  viewGridNews: true,
  country:'',
  count: 0,
  error: ''
}
 
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (val='a')=>{
   
    const response = await fetch(`https://newsapi.org/v2/everything?q=${val}&pageSize=18&sortBy=publishedAt&apiKey=${key}`)
    return response.json();
  }
)

export const fetchCountryNews = createAsyncThunk(
  'news/fetchCountryNews',
  async (val='pl')=>{
   
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
  },
    switchCountry: (state,action) =>{
      state.country = action.payload;
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
    builder.addCase(fetchCountryNews.pending,(state)=>{
      state.loading = true;
    })
    builder.addCase(fetchCountryNews.fulfilled, (state, action) => {
     
      state.loading = false;
      state.news = action.payload.articles;
      state.count = action.payload.articles.length;
      state.country = '';
      state.error = ''
    })
    builder.addCase(fetchCountryNews.rejected,(state,action) => {
      state.loading = false
      state.news = []
      state.error = action.error.message
    })
  },
})

export const {switchViewNews, switchCountry} = newsSlice.actions;
export default newsSlice;

