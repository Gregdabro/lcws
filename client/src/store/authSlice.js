import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
const user = JSON.parse(localStorage.getItem("user"));
export const signup = createAsyncThunk(
    "auth/signup",
    async ({ name, email, password }, thunkAPI) => {
        try {
            const response = await authService.signup({ name, email, password });
            return response.user;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await authService.login({ email, password });
            return response.user;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout();
});
const initialState = user
    ? { isLoggedIn: true, user: user.user }
    : { isLoggedIn: false, user: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signup.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        [signup.rejected]: (state) => {
            state.isLoggedIn = false;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        [login.rejected]: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [logout.fulfilled]: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});
const { reducer: authReducer } = authSlice;

// Selectors
export const isLoggedInSelector = () => (state) => state.auth.isLoggedIn;
export const getCurrentUser = () => (state) => state.auth.user;
export default authReducer;
