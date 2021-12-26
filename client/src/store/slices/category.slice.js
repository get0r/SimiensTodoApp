import { createSlice } from '@reduxjs/toolkit';

import { fetchSuccess, fetchBegin, fetchFail } from './rootActions';
import { CategoryService } from '../../services/category.service';
import { withError } from '../../services/axios';

const initialState = {
    categories: [],
    loading: false,
    hasErrors: false,
    error: true,
};

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        startLoading: state => fetchBegin(state),

        fetchCategoriesSuccess: (state, action) => fetchSuccess(state, 'categories', action.payload),

        fetchCategoriesFail: (state, action) => fetchFail(state, action.payload),

        addCategorySuccess: (state, action) => {
            state.loading = false;
            state.hasErrors = false;
            state.error = null;
            state.categories.push(action.payload);
        },

        addCategoryFail: (state, action) => fetchFail(state, action.payload),
    },
});

const {
    startLoading,
    fetchCategoriesSuccess,
    fetchCategoriesFail,
} = categorySlice.actions;

export const categoriesSelector = state => state.categories;

export default categorySlice.reducer;


//Async actions to the rescue of this

export const fetchCategories = () => {
    async dispatch => {
        dispatch(startLoading());
        try {
            const { message } = await (await CategoryService.getCategories()).data;
            dispatch(fetchCategoriesSuccess(message));
        } catch (error) {
            dispatch(fetchCategoriesFail(withError(error)));
        }
    };
};

export const addCategory = (catInfo) => {
    return async dispatch => {
        dispatch(startLoading());
        try {
            const { message } = await (await CategoryService.createCategory(catInfo)).data;
            return dispatch(addCategorySuccess(message))
        } catch (error) {
            return dispatch(addCategoryFail(withError(error)));
        }
    };
};
