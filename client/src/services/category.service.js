import { api } from './axios';
import { CATEGORIES, withId } from './routeConstants';

export const CategoryService = {
    createCategory: (categoryInfo) => api.post(CATEGORIES, categoryInfo),
    getCategoryById: (categoryId) => api.get(withId(CATEGORIES, categoryId)),
    getCategories: () => api.get(CATEGORIES),
    updateCategoryById: (categoryId, updatedCategory) => api.put(withId(CATEGORIES, categoryId), updatedCategory),
    removeCategoryById: (categoryId) => api.delete(withId(CATEGORIES, categoryId)),
};
