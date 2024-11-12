import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProduct } from '../../api/products';

const initialState = {
    data: null,
    status: 'idle',
    error: null,
    success: null
};
  

export const fetchProducts = createAsyncThunk(
    'product/fetchProduct',
    async ({ categoryId }, { rejectWithValue }) => {
      try {
        const response = await fetchProduct({
            categoryId: categoryId
        });
        
        return response;
      } catch (error) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  );

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loading'
        state.error = null;
        state.success = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload;
        state.error = null;
        state.success = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = null;
        state.success = null;
      })
  },
});

export const { } = productsSlice.actions;

export default productsSlice.reducer;
