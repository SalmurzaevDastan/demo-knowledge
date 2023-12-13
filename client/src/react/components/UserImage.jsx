import { Box } from '@mui/material';
import { API } from '../../app/constants/API';

const UserImage = ({ image, size = '60px' }) => {
  return (
    <Box width={ size } height={ size }>
      <img
        style={ {
          objectFit: 'cover',
          borderRadius: '30%'
        } }
        width={ '100%' }
        height={ size }
        alt='user'
        src={ `${API}/assets/${image}` }
      />
    </Box>
  );
};

export default UserImage;
