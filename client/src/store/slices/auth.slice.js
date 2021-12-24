import { createSlice } from '@reduxjs/toolkit';
import { AuthServices } from '../../services/auth.service';
import { fetchUserSuccess } from './user.slice';

const initialState = {
    token: null,
    loading: false,
    hasErrors: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.token = null;
            state.loading = true;
            state.hasErrors = false;
            state.error = null;
        },

        fetchTokenSuccess: (state, action) => {
            state.loading = false;
            state.token = action.payload;
            state.error = null;
            state.hasErrors = false;
        },

        fetchTokenFailed: (state, action) => {
            state.loading = false;
            state.token = action.payload;
            state.error = null;
            state.hasErrors = false;
        },
    },
});

export const {
    startLoading,
    fetchTokenSuccess,
    fetchTokenFailed,
} = authSlice.actions;

export const authSelector = state => state.auth;

export default authSlice.reducer;

export const fetchToken = () => {
    return async dispatch => {
        dispatch(startLoading());
        try {
            const { message } = await (await AuthServices.getUser()).data;
            dispatch(fetchTokenSuccess(message.token));
            return dispatch(fetchUserSuccess(message));
        } catch (error) {
            if (error.response) {
                return dispatch(fetchTokenFailed(undefined));
            }
            //network error
            return dispatch(fetchTokenFailed(0));
        }
    };
};
