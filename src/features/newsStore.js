import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Initial state of the news slice
const initialState = {
  loading: false,
  news: [],
  viewGridNews: true,
  country: '',
  error: '',
};

// Async thunk to fetch news from NewsAPI with a given query
const baseUrl = process.env.REACT_APP_BASE_URL;
const apiPathFetchNews = process.env.REACT_APP_API_PATH_EVERYTHING;
const apiPathFetchCountryNews = process.env.REACT_APP_API_PATH_TOP_HANDLES
const key = process.env.REACT_APP_KEY;

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (val = 'a') => {

      const response = await fetch(`${baseUrl}${apiPathFetchNews}?q=${val}&pageSize=18&sortBy=publishedAt&apiKey=${key}`);
      return response.json();
  }
);

// Async thunk to fetch news from NewsAPI for a given country
export const fetchCountryNews = createAsyncThunk(
  'news/fetchCountryNews',
  async (val = 'pl') => {
      const response = await fetch(`${baseUrl}${apiPathFetchCountryNews}?country=${val}&apiKey=${key}`);
      return response.json();
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
    });
    // Reducer to handle the rejected state after fetching news
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
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
    });
    // Reducer to handle the rejected state after fetching country news
    builder.addCase(fetchCountryNews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

// Export the actions from the news slice
export const { switchViewNews, switchCountry } = newsSlice.actions;

// Export the news slice reducer
export default newsSlice;
