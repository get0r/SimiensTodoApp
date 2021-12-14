import { useDispatch } from 'react-redux';
import { AuthServices } from '../services/auth.service';
import { setUser } from '../store/slices/user.slice';

export const isAuthenticated = async () => {
    const dispatch = useDispatch();

    if (user.token) return true;

    try {
        const { message } = await (await AuthServices.getUser()).data;
        dispatch(setUser(message));
        return true;
    } catch (error) {
        return false;
    }
};