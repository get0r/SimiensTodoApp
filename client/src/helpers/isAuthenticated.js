import { useDispatch, useSelector } from 'react-redux';
import { AuthServices } from '../services/auth.service';
import { setUser, userSelector } from '../store/slices/user.slice';

export const isAuthenticated = async () => {
    const dispatch = useDispatch();
    const { user } = useSelector(userSelector);

    if (user && Object.keys(user).length != 0) return true;

    try {
        const { message } = await (await AuthServices.getUser()).data;
        dispatch(setUser(message));
        return true;
    } catch (error) {
        return false;
    }
};