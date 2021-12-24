import { createSlice } from "@reduxjs/toolkit";
import { AuthServices } from '../../services/auth.service';
import { withError } from "../../services/axios";
import { fetchTokenSuccess } from "./auth.slice";

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
            state.hasErrors = false;
            state.error = null;
        },

        fetchUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
            state.hasErrors = false;
        },

        fetchUserFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.hasErrors = true;
        },

        signInSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
            state.hasErrors = false;
        },

        signInFailed: (state, action) => {
            state.user = undefined;
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
            state.hasErrors = true;
            state.error = action.payload;
        },
    },
});

export const {
    startLoading,
    fetchUserSuccess,
    fetchUserFailed,
    signInSuccess,
    signInFailed,
    signUpSuccess,
    signUpFailed,
} = userSlice.actions;

//user selector
export const userSelector = state => state.user;

export default userSlice.reducer;


//async logic actions

export const signIn = (userInfo) => {
    return async dispatch => {
        dispatch(startLoading());
        try {
            const { message } = await (await AuthServices.signIn(userInfo)).data;
            dispatch(signInSuccess(message));
            return dispatch(fetchTokenSuccess(message.token));
        } catch (error) {
            dispatch(signInFailed(withError(error)));
        }
    };
};

export const signUp = (userInfo) => {
    return async dispatch => {
        dispatch(startLoading());
        try {
            const { message } = await (await AuthServices.signUp(userInfo)).data;
            return dispatch(signUpSuccess(message))
        } catch (error) {
            return dispatch(signUpFailed(withError(error)));
        }
    };
};

export const fetchUser = () => {
    return async dispatch => {
        dispatch(startLoading());
        try {
            const { message } = await (await AuthServices.getUser()).data;
            return dispatch(fetchUserSuccess(message));
        } catch (error) {
            return dispatch(fetchUserFailed(withError(error)));
        }
    };
};
