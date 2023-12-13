import { Box, IconButton, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const DashContainer = styled.div`
  display: flex;
`;

export const TitleContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const DashMain = styled('div')(({ theme }) => ({
  background: theme.palette.primary.dashbackground,
  flexGrow: 1,
  display: 'flex',
  padding: '0 40px 64px',
  minHeight: '100vh',
  width: '100%',
  justifyContent: 'center',
  '@media (max-width: 768px)': {
    padding: '0 16px 64px'
  }
}));

export const DashContent = styled('div')(() => ({
  overflowX: 'auto',
  display: 'inline-table',
  width: '100%',
  maxWidth: '1200px',
  height: '100%'
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '@media (max-width: 480px)': {
    marginRight: '0'
  }
}));

export const DashContentTopSection = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 40px auto;
  @media (max-width: 480px) {
    margin: 24px auto;
  }
`;

export const TitleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Source Sans Pro Bold',
  fontStyle: 'normal',
  '&.MuiTypography-h6': {
    fontSize: '20px',
    lineHeight: '28px',
    color: theme.palette.primary.blackAndWhite
  }
}));
