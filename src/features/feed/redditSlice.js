import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../api/reddit";

export const loadPosts = createAsyncThunk("feed/loadPosts", fetchPosts);

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  searchTerm: "",
  selectedSubreddit: "/r/pics/",
};

const redditSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      }).addCase(loadPosts.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error loading posts: ");
      }
    );
  },
});

export const { setSelectedSubreddit } = redditSlice.actions;
export default redditSlice.reducer;
export const selectAllPosts = (state) => state.reddit.posts;
export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit;

