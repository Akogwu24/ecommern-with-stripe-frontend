import { errorToast } from '../../components/common/NotificationHandler';
import http from '../../services/api';
import { loginFailure, loginStart, loginSuccess } from '../feature/userSlice';

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const { data } = await http.post('/login', user);
    console.log('data', data);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
    console.log(error.response);
    errorToast(error.response?.data.message);
  }
};
