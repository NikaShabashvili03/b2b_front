import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategory } from '../../api/category';

const initialState = {
    data: null,
    status: 'idle',
    error: null,
    success: null
};
  

export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
  const response = await fetchCategory();
  return response;
});

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = 'loading'
        state.error = null;
        state.success = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload;
        state.error = null;
        state.success = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = null;
        state.success = null;
      })
  },
});

export const { } = categorySlice.actions;

export default categorySlice.reducer;
