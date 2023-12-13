import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../../../redux/api/apiSlice';
import { setLogin } from '../../../../redux/userSlice/userSlice';
import { patchAuthorizationHeader } from '../../../../redux/api/http-query-client';
export function useLogin() {
  const [loginMutation, flags] = useLoginMutation();
  const dispatch = useDispatch();
  const handleLogin = async account => {
    const { token, user } = await loginMutation(account).unwrap();
    if (user && token) {
      dispatch(setLogin({ token, user }));
      patchAuthorizationHeader(token);
    }
    if (flags.error) {
      return flags.error;
    }
  };

  return { handleLogin, ...flags };
}
