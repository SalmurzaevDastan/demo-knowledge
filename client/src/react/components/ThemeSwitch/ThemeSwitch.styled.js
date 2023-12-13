import styled from '@emotion/styled';
import { Switch } from '@mui/material';

export const DarkThemeSwitch = styled(Switch)(({ theme, checked }) => ({
  padding: 8,
  width: 70,
  zIndex: 200,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: theme.palette.primary.main,
    opacity: 1,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 70,
      height: 24
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#fff',
    boxShadow: 'none',
    width: 18,
    height: 18,
    margin: checked ? '1px 10px' : '1px 2.9px'
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: theme.palette.primary.main,
    opacity: 1
  }
}));
