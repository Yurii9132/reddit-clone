import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from '../features/subreddits/subredditSlice';
import redditReducer from "../features/feed/redditSlice"

export const store = configureStore({
  reducer: {
    subreddits: subredditReducer,
    reddit: redditReducer,
  },
});
