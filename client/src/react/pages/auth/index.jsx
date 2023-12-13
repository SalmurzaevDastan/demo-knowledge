import { Button } from '@mui/material';
import { CardStyled, TitleText, WrapperStyled } from './Auth.styled';
import { useState } from 'react';
import LoginForm from './login-form/LoginForm';
import SignUpForm from './sign-up-form/SignUpForm';

const Index = () => {
  const [pageType, setPageType] = useState(true);

  return (
    <WrapperStyled>
      <CardStyled>
        <TitleText variant='h4'>Let&apos;s get started!</TitleText>
        <TitleText variant='h6'>
          Do you have an account?
          <Button variant='text' size='small' onClick={ () => setPageType(!pageType) }>
            <TitleText variant='link'>{pageType ? 'SignUp' : 'SignIn'}</TitleText>
          </Button>
        </TitleText>
        {pageType ? <LoginForm /> : <SignUpForm />}
      </CardStyled>
    </WrapperStyled>
  );
};

export default Index;
