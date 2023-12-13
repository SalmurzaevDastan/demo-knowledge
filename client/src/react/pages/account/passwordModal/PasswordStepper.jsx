/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { TextField } from '@mui/material';

import {
  useUpdateNameOrPasswordMutation,
  useVerifyPasswordMutation
} from '../../../../redux/api/apiSlice';
import { passwordSteps } from '../../../../app/constants/const';
import { ButtonStyled, MobileStepperStyled } from '../Account.styled';

export default function PasswordStepper({ user }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = passwordSteps.length;
  const [verify, { isLoading: verifyIsLoading }] = useVerifyPasswordMutation();
  const [updateMutation, { isLoading: updateIsLoading }] = useUpdateNameOrPasswordMutation();
  const [error, setError] = React.useState('');
  const isLoading = verifyIsLoading || updateIsLoading;

  const handleNext = async e => {
    e.preventDefault();
    const data = {
      password: e.currentTarget.elements.password.value
    };
    if (activeStep === 0) {
      const res = await verify(data)
        .unwrap()
        .catch(err => setError(err.data.msg));
      if (res.msg === true) {
        setActiveStep(1);
        e.target.password.value = '';
        setError('');
      }
    }
    if (activeStep === 1) {
      const account = {
        id: user?._id,
        data: e.currentTarget.elements.password.value,
        key: 'password'
      };
      const res = await updateMutation(account)
        .unwrap()
        .catch(err => setError(err.data.msg));
      if (res.msg === true) {
        setActiveStep(2);
        setError('');
      }
    }
  };

  return (
    <Box sx={ { maxWidth: 400, flexGrow: 1 } }>
      <Typography>{passwordSteps[activeStep].label}</Typography>
      <form onSubmit={ handleNext }>
        {activeStep !== 2 && (
          <TextField
            name='password'
            placeholder={ passwordSteps[activeStep].placeholder }
            type='password'
            helperText={ error }
          />
        )}
        <MobileStepperStyled
          variant='text'
          steps={ maxSteps }
          position='static'
          activeStep={ activeStep }
          nextButton={
            isLoading ? (
              'Loading'
            ) : (
              <ButtonStyled
                size='small'
                variant='text'
                type={ 'submit' }
                disabled={ activeStep === maxSteps - 1 }>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </ButtonStyled>
            )
          }
        />
      </form>
    </Box>
  );
}
