import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { key } from '../config/dataApp';

// Initial state of the news slice
const initialState = {
  loading: false,
  news: [],
  viewGridNews: true,
  country: '',
  count: 0,
  error: '',
};

// Async thunk to fetch news from NewsAPI with a given query
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (val = 'a') => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${val}&pageSize=18&sortBy=publishedAt&apiKey=${key}`);
      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Async thunk to fetch news from NewsAPI for a given country
export const fetchCountryNews = createAsyncThunk(
  'news/fetchCountryNews',
  async (val = 'pl') => {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${val}&apiKey=${key}`);
      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// The news slice of the Redux store
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // Reducer to toggle between grid and list view of news articles
    switchViewNews: (state, action) => {
      state.viewGridNews = action.payload;
    },
    // Reducer to set the country to fetch news for
    switchCountry: (state, action) => {
      state.country = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Reducer to handle the pending state while fetching news
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });
    // Reducer to handle the fulfilled state after fetching news
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload.articles;
      state.count = action.payload.articles.length;
      state.error = '';
    });
    // Reducer to handle the rejected state after fetching news
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.error.message;
    });
    // Reducer to handle the pending state while fetching country news
    builder.addCase(fetchCountryNews.pending, (state) => {
      state.loading = true;
    });
    // Reducer to handle the fulfilled state after fetching country news
    builder.addCase(fetchCountryNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload.articles;
      state.count = action.payload.articles.length;
      state.country = '';
      state.error = '';
    });
    // Reducer to handle the rejected state after fetching country news
    builder.addCase(fetchCountryNews.rejected, (state, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.error.message;
    });
  },
});

// Export the actions from the news slice
export const { switchViewNews, switchCountry } = newsSlice.actions;

// Export the news slice reducer
export default newsSlice;
