import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchsubCategory } from '../../api/subCategory';

const initialState = {
    data: null,
    status: 'idle',
    error: null,
    success: null
};

export const fetchSubCategories = createAsyncThunk(
    'subCategory/fetchSubCategories',
    async ({ categoryId }, { rejectWithValue }) => {
      try {
        const response = await fetchsubCategory({
            categoryId: categoryId
        });
        
        return response;
      } catch (error) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  );


const subCategorySlice = createSlice({
  name: 'subCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubCategories.pending, (state, action) => {
        state.status = 'loading'
        state.error = null;
        state.success = null;
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload;
        state.error = null;
        state.success = null;
      })
      .addCase(fetchSubCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = null;
        state.success = null;
      })
  },
});

export const { } = subCategorySlice.actions;

export default subCategorySlice.reducer;
