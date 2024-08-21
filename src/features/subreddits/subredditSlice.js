import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSubreddits } from "../../api/reddit";

const loadSubreddits = createAsyncThunk("subreddits/getSubreddits",fetchSubreddits);

const initialState = {
  subreddits: [],
  isLoading: false,
  error: null,
};

const subredditSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSubreddits.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loadSubreddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subreddits = action.payload;
      })
      .addCase(loadSubreddits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export { loadSubreddits };
export default subredditSlice.reducer;
export const selectAllSubreddits = (state) => state.subreddits.subreddits;
