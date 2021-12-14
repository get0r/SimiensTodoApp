export const BASE_URL = 'http://localhost:3848/api/v1';

export const SIGNIN = '/signIn';
export const SIGNUP = '/signUp';
export const USER = '/user';

export const CATEGORIES = '/categories';
export const TODOS = '/todos';

export const withId = (path, id) => (`${path}/${id}`);
