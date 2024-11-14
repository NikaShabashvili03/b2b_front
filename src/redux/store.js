
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'
import categoryReducer from './slices/categorySlice'
import productsReducer from './slices/productsSlice'
import subCategoryReducer from './slices/subCategorySlice'
import productByIdReducer from './slices/productByIdSlice'
import cartReducer from './slices/cartSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    products: productsReducer,
    subCategory: subCategoryReducer,
    productById: productByIdReducer,
    cart: cartReducer
  },
});

export default store;
