import {
  BannerWrapperStyled,
  CardStyled,
  TextContentStyled,
  UserCardTextStyled,
  EditProfileIconStyled,
  ProfileIconButtonStyled,
  UserAvatarStyled
} from './Account.styled';
import { useSelector } from 'react-redux';
import { Badge, Button, Tooltip } from '@mui/material';
import { useState } from 'react';
import AvatarModal from './AvatarModal';
import NameModal from './NameModal';
import PasswordModal from './passwordModal/PasswordModal';
import { API } from '../../../app/constants/API';

const Account = () => {
  const { user } = useSelector(state => state?.user);
  const [openAvatarModal, setOpenAvatarModal] = useState(false);
  const [openPasswordModal, setPasswordModal] = useState(false);
  const [openNamedModal, setNamedModal] = useState(false);

  return (
    <CardStyled>
      <AvatarModal openModal={ openAvatarModal } setModal={ setOpenAvatarModal } user={ user } />
      <PasswordModal openModal={ openPasswordModal } setModal={ setPasswordModal } user={ user } />
      <NameModal openModal={ openNamedModal } setModal={ setNamedModal } user={ user } />
      <Badge
        overlap='circular'
        anchorOrigin={ { vertical: 'bottom', horizontal: 'right' } }
        badgeContent={
          <ProfileIconButtonStyled onClick={ () => setOpenAvatarModal(true) }>
            <BannerWrapperStyled>
              <Tooltip title='Edit Profile Avatar'>
                <EditProfileIconStyled />
              </Tooltip>
            </BannerWrapperStyled>
          </ProfileIconButtonStyled>
        }>
        <UserAvatarStyled
          alt={ `${user?.firstName}` }
          src={ `${API}/assets/${user?.picturePath}` } />
      </Badge>

      <TextContentStyled>
        <UserCardTextStyled>{user?.firstName}</UserCardTextStyled>
        <Badge
          onClick={ () => setNamedModal(true) }
          overlap='circular'
          style={ { transform: 'translate(-10px, -20px)' } }
          badgeContent={
            <ProfileIconButtonStyled>
              <BannerWrapperStyled>
                <Tooltip title='Edit Name'>
                  <EditProfileIconStyled />
                </Tooltip>
              </BannerWrapperStyled>
            </ProfileIconButtonStyled>
          }
        />
        <Button variant='contained' onClick={ () => setPasswordModal(true) }>
          Change Password
        </Button>
      </TextContentStyled>
    </CardStyled>
  );
};

export default Account;
