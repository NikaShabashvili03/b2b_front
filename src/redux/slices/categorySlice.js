import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategory } from '../../api/category';

const initialState = {
    data: null,
    status: 'idle',
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
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
      })
  },
});

export const { } = categorySlice.actions;

export default categorySlice.reducer;
