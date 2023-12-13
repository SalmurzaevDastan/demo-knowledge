import { useEffect } from 'react';
import { useCurrentScreenWidth } from '../../../hooks/screenSize/useCurrentSceenWidth';
import LogoutIcon from '@mui/icons-material/Logout';
import { menuItems } from './menuItems';
import { useSelector, useDispatch } from 'react-redux';
import { isSideMenuVisible, setSideMenuVisible } from '../../../redux/sideMenu/sideMenuSlice';
import { BREAKPOINTS } from '../../../app/constants/const';
import { ClickAwayListener } from '@mui/base';
import {
  MenuDrawer,
  MenuLink,
  MenuList,
  DrawerListItem,
  DrawerListText,
  MenuIcon,
  ListItemsWrapper
} from './SideNav.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { logOut } from '../../../redux/userSlice/userSlice';
import { setDarkMode } from '../../../redux/darkMode/darkModeSlice';

const SideNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { visible } = useSelector(isSideMenuVisible);
  const [screenWidth] = useCurrentScreenWidth();
  const { pathname } = useLocation();
  useEffect(() => {
    if (screenWidth <= BREAKPOINTS.IPAD_PRO) {
      dispatch(setSideMenuVisible({ visible: false }));
    } else {
      dispatch(setSideMenuVisible({ visible: true }));
    }
  }, [screenWidth, dispatch]);

  const handleMenuClose = () => {
    if (screenWidth <= BREAKPOINTS.IPAD_PRO) {
      dispatch(setSideMenuVisible({ visible: false }));
    }
  };

  const handleLogout = () => {
    dispatch(logOut());
    dispatch(setDarkMode({ darkMode: false }));
    navigate('/');
  };

  return (
    <ClickAwayListener onClickAway={ handleMenuClose } mouseEvent='onMouseDown'>
      <MenuDrawer open={ visible } variant='persistent' anchor='left' screenwidht={ screenWidth }>
        <ListItemsWrapper>
          <MenuList dense>
            {menuItems.map(item => (
              <MenuLink to={ item.path } key={ item.name } tabIndex={ 0 }>
                <DrawerListItem
                  tabIndex={ -1 }
                  onClick={ handleMenuClose }
                  selected={ pathname === item.path }>
                  <MenuIcon>
                    <item.icon />
                  </MenuIcon>
                  <DrawerListText primary={ item.name } />
                </DrawerListItem>
              </MenuLink>
            ))}
          </MenuList>
          <MenuList dense sx={ { marginBottom: '50px' } }>
            <DrawerListItem tabIndex={ 0 } onClick={ handleLogout }>
              <MenuIcon>
                <LogoutIcon />
              </MenuIcon>
              <DrawerListText primary={ 'Sign out' } />
            </DrawerListItem>
          </MenuList>
        </ListItemsWrapper>
      </MenuDrawer>
    </ClickAwayListener>
  );
};

export default SideNav;
