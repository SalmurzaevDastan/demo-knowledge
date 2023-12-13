import { Drawer, List, ListItem, ListItemText, ListItemIcon, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { BREAKPOINTS } from '../../../app/constants/const';
import { withStyles } from '@mui/styles';
import styled from '@emotion/styled';
const drawerWidth = 224;

export const MenuDrawer = styled(Drawer)(({ theme, screenwidht }) => ({
  width: screenwidht <= BREAKPOINTS.IPAD_PRO ? 'auto' : drawerWidth,
  flexGrow: 0,
  '& .MuiPaper-root': {
    width: screenwidht <= BREAKPOINTS.IPAD_PRO ? 'auto' : drawerWidth,
    padding: '40px 0',
    borderRight: 'none !important',
    backgroundColor: `${theme.palette.primary.sidenav} !important`
  }
}));

export const DrawerTopSection = styled.div`
  padding: 4px 0 24px 34px;
  display: flex;
  & p {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 28px;
    margin: 0 13px;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: initial;
`;

export const MenuIcon = styled(ListItemIcon)`
  min-width: 0;
  margin-right: 20px;
`;

export const MenuList = withStyles({
  root: {
    padding: '0 8px',
    '& :hover': {
      cursor: 'pointer'
    }
  }
})(List);

export const DrawerListItem = withStyles(({ palette }) => ({
  root: {
    margin: '4px 0',
    height: '48px',
    padding: '4px 34px !important',
    color: `${palette.text.primary} !important`,
    minWidth: '224px',
    '&:hover': {
      color: `${palette.primary.main} !important`,
      background: `${palette.primary.sidenavHover} !important`,
      '& svg': {
        color: `${palette.primary.main} !important`
      }
    },
    '&.Mui-selected': {
      color: `${palette.primary.main} !important`,
      background: `${palette.primary.sidenavHover} !important`,
      '& svg': {
        color: `${palette.primary.main} !important`
      },
      '& span': {
        fontWeight: 600
      }
    },
    '&.Mui-selected:hover': {
      opacity: 0.85
    }
  },
  gutters: {
    paddingLeft: '8px',
    paddingRight: '8px'
  }
}))(ListItem);

export const DrawerListText = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px'
  }
}));

export const ListItemsWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%'
}));
