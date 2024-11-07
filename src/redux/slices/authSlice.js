import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, fetchProfile, logout } from '../../api/auth';


const initialState = {
    user: null,
    status: 'idle',
    error: null,
    success: null
  };
  

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({email, password}, { rejectWithValue }) => {
    try {
      const response = await login({
        email: email,
        password: password
      });

      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data.message);
    }
  }
);

export const fetchUserProfile = createAsyncThunk('auth/fetchUserProfile', async () => {
  const response = await fetchProfile();
  return response;
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await logout();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.success = null;
    },
    clearSucces: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.success = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
        state.success = "Login Succesed"
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Login failed'
        state.success = null;
      })
      .addCase(fetchUserProfile.pending, (state, action) => {
        state.status = 'loading'
        state.error = null;
        state.success = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload;
        state.error = null;
        state.success = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
        state.success = null;
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.success = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.error = null;
        state.success = 'Logout success';
      })
      .addCase(logoutUser.rejected, (state) => {
        state.status = 'failed';
        state.error = null;
        state.success = null;
      });
  },
});

export const { clearError, clearSucces } = authSlice.actions;

export default authSlice.reducer;
