import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addCart, fetchCart } from '../../api/cart'

const initialState = {
    data: null,
    length: 0,
    status: 'idle',
};
  

export const addOnCart = createAsyncThunk(
    'cart/addCart',
    async ({ productId, quantity }, { rejectWithValue }) => {
      try {
        const response = await addCart({
          productId: productId,
          quantity: quantity
        });
  
        return response.user;
      } catch (error) {
        return rejectWithValue(error.response?.data.message);
      }
    }
);
  
export const fetchCartProducts = createAsyncThunk('cart/fetchCart', async () => {
    const response = await fetchCart();

    return response;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartProducts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.length = action.payload?.cartItems && action.payload.cartItems.length
        state.data = action.payload;
      })
      .addCase(fetchCartProducts.rejected, (state, action) => {
        state.status = 'failed'
      })
      .addCase(addOnCart.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(addOnCart.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.length = action.payload?.cartItems && action.payload.cartItems.length
        state.data = action.payload;
      })
      .addCase(addOnCart.rejected, (state, action) => {
        state.status = 'failed'
      })
  },
});

export const { } = cartSlice.actions;

export default cartSlice.reducer;
