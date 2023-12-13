import styled from '@emotion/styled';
import { Card as _Card, Box, Button, Typography } from '@mui/material';
import { IconButton, Avatar } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import MobileStepper from '@mui/material/MobileStepper';
export const CardStyled = styled(_Card)(() => ({
  minHeight: '200px',
  borderRadius: '6px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04), 0px 1px 10px rgba(0, 0, 0, 0.04)',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '24px 24px',
  '@media (max-width: 300px)': {
    flexDirection: 'column'
  }
}));

export const TextContentStyled = styled(Box)(() => ({
  width: '100%',
  height: '250px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginLeft: '100px',
  '@media (max-width: 620px)': {
    marginLeft: '15px'
  },
  '@media (max-width: 300px)': {
    marginLeft: 0,
    height: '100%'
  }
}));

export const UserCardTextStyled = styled(Typography)(() => ({
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '26px',
  margin: '10px'
}));

export const BannerWrapperStyled = styled('div')`
  width: 20px;
  height: 20px;
  background: linear-gradient(141.24deg, #6355c0 13.31%, #b25af6 90.74%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileIconButtonStyled = styled(IconButton)(() => ({
  padding: '0 0 4px'
}));

export const EditProfileIconStyled = styled(CreateIcon)(({ theme }) => ({
  width: '12px',
  height: '12px',
  color: theme.palette.main.white
}));

export const UserAvatarStyled = styled(Avatar)(() => ({
  marginTop: '20px',
  width: '100%',
  height: '250px'
}));

export const ModalWrapperStyled = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minHeight: '100px'
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.blackAndWhite
}));

export const MobileStepperStyled = styled(MobileStepper)(({ theme }) => ({
  background: theme.palette.primary.wizzard,
  position: 'static',
  display: 'flex',
  alignItems: 'center'
}));
