import ErrorMessage from '../../../components/ErrorMessage';
import { TitleText } from '../Auth.styled';
import { useLogin } from './useLogin';
import { Button, Stack, TextField } from '@mui/material';

const LoginForm = () => {
  const { handleLogin, isLoading, error } = useLogin();

  const handleSubmit = async event => {
    event.preventDefault();

    const account = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value
    };

    await handleLogin(account);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <Stack direction='column' spacing={ 2 } sx={ { marginTop: 3 } }>
        <TextField label='Email' variant='outlined' name='email' type='email' required />
        <TextField label='Password' variant='outlined' name='password' type='password' required />
        {error && <ErrorMessage error={ error } />}
        <Button variant='contained' size='large' type='submit' disabled={ isLoading }>
          <TitleText>Login</TitleText>
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
