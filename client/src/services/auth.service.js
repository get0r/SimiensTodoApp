import { api } from './axios';
import { SIGNIN, SIGNUP, USER } from './routeConstants';

export const AuthServices = {
    signIn: (signInInfo) => api.post(SIGNIN, signInInfo),
    signUp: (signUpInfo) => api.post(SIGNUP, signUpInfo),
    getUser: () => api.get(USER),
};
