import { Grid } from '@mui/material';
import { CardStyled, ContentStyled, CardActionStyled, CardTextStyled } from './UserCard.styled';
import UserImage from '../UserImage';
import moment from 'moment';

const UserCard = ({ user }) => {
  return (
    <CardStyled>
      <CardActionStyled>
        <UserImage image={ user.picturePath } />
        <ContentStyled>
          <Grid>
            <CardTextStyled>{user.firstName}</CardTextStyled>
            <CardTextStyled>
              Age:{' '}
              {moment().diff(user.birthDay, 'years') === 0 ?
                1 :
                moment().diff(user.birthDay, 'years')}
            </CardTextStyled>
          </Grid>
        </ContentStyled>
      </CardActionStyled>
    </CardStyled>
  );
};

export default UserCard;
