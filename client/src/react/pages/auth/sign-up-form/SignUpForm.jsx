import { Button, MenuItem, Stack, TextField } from '@mui/material';
import { useSignUp } from './useSignUp';
import { useState } from 'react';
import { genders } from '../../../../app/constants/const';
import moment from 'moment';
import { DatePicker } from '@mui/x-date-pickers';
import ErrorMessage from '../../../components/ErrorMessage';

const SignUpForm = () => {
  const { handleSignUp, isLoading, error } = useSignUp();
  const [fileName, setFileName] = useState('Upload Avatar');
  const [currentDate, setCurrentDate] = useState(moment());

  const handleSubmit = async event => {
    event.preventDefault();
    const account = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
      firstName: event.currentTarget.elements.firstName.value,
      male: event.currentTarget.elements.male.value,
      picture: event.currentTarget.elements.picture.files[0],
      birthDay: currentDate.toDate()
    };

    await handleSignUp(account);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <Stack direction='column' spacing={ 2 } sx={ { marginTop: 3 } }>
        <TextField label='Email' variant='outlined' name='email' type='email' required />
        <TextField label='Password' variant='outlined' name='password' type='password' required />
        <TextField id='outlined-select-currency' select defaultValue='male' name='male'>
          {genders.map(option => (
            <MenuItem key={ option.value } value={ option.value }>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <DatePicker
          label='Birthday'
          value={ currentDate }
          onChange={ newValue => setCurrentDate(newValue) }
          slotProps={ {
            textField: {
              helperText: 'MM/DD/YYYY'
            }
          } }
        />
        <TextField label='Name' variant='outlined' name='firstName' type='text' required />
        <label htmlFor='upload-photo'>
          <input
            style={ { display: 'none' } }
            id='upload-photo'
            required
            name='picture'
            type='file'
            onChange={ e => setFileName(e.target.files[0].name) }
          />

          <Button variant='outlined' component='span' sx={ { width: '100%' } }>
            {fileName}
          </Button>
        </label>
        {error && <ErrorMessage error={ error } />}
        <Button variant='contained' size='large' type='submit' disabled={ isLoading }>
          Register
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
