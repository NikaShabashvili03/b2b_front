import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductById } from '../../api/productById';

const initialState = {
    data: null,
    status: 'idle',
    error: null,
    success: null
};
  

export const fetchProductOneById = createAsyncThunk(
    'product/fetchOneProduct',
    async ({ productId }, { rejectWithValue }) => {
      try {
        const response = await fetchProductById({
          productId: productId
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
      .addCase(fetchProductOneById.pending, (state, action) => {
        state.status = 'loading'
        state.error = null;
        state.success = null;
      })
      .addCase(fetchProductOneById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload;
        state.error = null;
        state.success = null;
      })
      .addCase(fetchProductOneById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = null;
        state.success = null;
      })
  },
});

export const { } = productsSlice.actions;

export default productsSlice.reducer;
