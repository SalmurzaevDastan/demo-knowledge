import styled from '@emotion/styled';
import { Box, Card, Typography } from '@mui/material';

export const WrapperStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.main.authBackground,
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 370px)': {
    padding: '5px'
  }
}));
export const CardStyled = styled(Card)(({ theme }) => ({
  padding: '20px 40px',
  maxWidth: '290px',
  width: '100%',
  borderRadius: '16px',
  backgroundColor: theme.palette.main.white,
  boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
  '@media (max-width: 370px)': {
    padding: '5px'
  }
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Source Sans Pro Bold',
  fontStyle: 'normal',
  '&.MuiTypography-h4': {
    fontSize: '28px',
    lineHeight: '28px',
    color: theme.palette.main.black
  },
  '&.MuiTypography-h6': {
    fontSize: '20px',
    lineHeight: '28px',
    color: theme.palette.main.subtitle
  },
  '&.buttons': {
    fontSize: '20px',
    lineHeight: '28px',
    color: theme.palette.main.black
  },
  '&.link': {
    fontSize: '16px',
    lineHeight: '18px',
    color: theme.palette.main.revision
  }
}));
