import styled from '@emotion/styled';
import { Card as _Card, CardActionArea, CardContent, Typography } from '@mui/material';

export const CardStyled = styled(_Card)(({ theme }) => ({
  width: '45%',
  borderRadius: '6px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04), 0px 1px 10px rgba(0, 0, 0, 0.04)',
  margin: '12px 15px',
  '@media (max-width: 620px)': {
    width: '100%'
  }
}));

export const ContentStyled = styled(CardContent)(({ theme }) => ({
  padding: '8px 24px',
  width: '100%'
}));

export const CardActionStyled = styled(CardActionArea)(({ theme }) => ({
  padding: '8px 24px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100%'
}));

export const CardTextStyled = styled(Typography)(({ theme }) => ({
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '20px'
}));
