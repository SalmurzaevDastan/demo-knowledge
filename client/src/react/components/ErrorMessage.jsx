import { Box, Typography } from '@mui/material';

const ErrorMessage = ({ error }) => {
  return (
    <Box>
      {error.status === 400 ? (
        error.data.map(el => (
          <Typography variant='h6' key={ el.msg } sx={ { color: 'red' } }>
            {el.msg}
          </Typography>
        ))
      ) : (
        <Typography variant='h6' sx={ { color: 'red' } }>
          {error.data.msg}
        </Typography>
      )}
    </Box>
  );
};

export default ErrorMessage;
