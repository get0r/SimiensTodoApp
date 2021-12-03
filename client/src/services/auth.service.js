import { api } from './axios';
import { SIGNIN, SIGNUP } from './routeConstants';

export const AuthServices = {
    signIn: (signInInfo) => api.post(SIGNIN, signInInfo),
    signUp: (signUpInfo) => api.post(SIGNUP, signUpInfo),
};
