import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, fetchProfile, logout, registerProfile } from '../../api/auth';


const initialState = {
    user: null,
    status: 'idle',
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await login({
        email: email,
        password: password
      });

      window.localStorage.setItem('token', response.token);
      return response.user;
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
  window.localStorage.removeItem("token")
});

export const fetchUserRegister = createAsyncThunk('auth/fetchUserRegister' , async ({ 
  company,
  position, 
  identify, 
  name,
  lastname,
  phone, 
  email, 
  password, 
}, { rejectWithValue }) => {
  try {
    const response = await registerProfile({
      company,
      position, 
      identify, 
      name,
      lastname,
      phone, 
      email, 
      password,
    });
    return response;
  } 
  catch (error) {
    return rejectWithValue(error.response?.data.message);
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.success = null;
    },
    clearSucces: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(fetchUserRegister.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUserRegister.fulfilled, (state, action) => {
        state.status = 'succeeded'
      })
      .addCase(fetchUserRegister.rejected, (state, action) => {
        state.status = 'failed'
      })
      .addCase(fetchUserProfile.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed'
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { clearError, clearSucces } = authSlice.actions;

export default authSlice.reducer;
