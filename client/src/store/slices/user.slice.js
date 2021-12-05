import { createSlice } from "@reduxjs/toolkit";
import { AuthServices } from '../../services/auth.service';

const initialState = {
    user: null,
    loading: false,
    hasErrors: false,
    error: null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true;
        },

        signInSuccess: (state, action) => {
            state.user = action.payload,
            state.loading = false;
            state.hasErrors = false;
            state.error = null;
        },

        signInFailed: (state, action) => {
            state.loading = false;
            state.hasErrors = true;
            state.error = action.payload;
        },

        signUpSuccess: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.hasErrors = false;
            state.error = null;
        },

        signUpFailed: (state, action) => {
            state.loading = false;
            state.hasErrors = false;
            state.error = action.payload;
        },
    },
});

const {
    startLoading,
    signInSuccess,
    signInFailed,
    signUpSuccess,
    signUpFailed,
} = userSlice.actions;

//user selector
export const userSelector = state => state.user;

export default userSlice.reducer;


//async logic actions

export const signIn = (username, password) => {
    async dispatch => {
        dispatch(startLoading());
        try {
            const user = await AuthServices.signIn({ username, password });
            dispatch(signInSuccess(user));
        } catch (error) {
            dispatch(signInFailed(error.message));
        }
    };
};

