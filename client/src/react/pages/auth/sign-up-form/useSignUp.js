import { useDispatch } from 'react-redux';
import { useSignUpMutation } from '../../../../redux/api/apiSlice';
import { setLogin } from '../../../../redux/userSlice/userSlice';
import { patchAuthorizationHeader } from '../../../../redux/api/http-query-client';

export function useSignUp() {
  const [signUpMutation, flags] = useSignUpMutation();

  const dispatch = useDispatch();
  const handleSignUp = async account => {
    const { token, user } = await signUpMutation(account).unwrap();

    if (user && token) {
      dispatch(setLogin({ token, user }));
      patchAuthorizationHeader(token);
    }
  };

  return { handleSignUp, ...flags };
}
