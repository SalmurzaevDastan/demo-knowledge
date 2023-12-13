import { BREAKPOINTS } from '../../app/constants/const';
import { useCurrentScreenWidth } from '../../hooks/screenSize/useCurrentSceenWidth';
import SideNav from '../components/SideNav/SideNav';
import {
  DashContainer,
  DashContent,
  DashContentTopSection,
  DashMain,
  MenuButton,
  TitleContainer,
  TitleText
} from './Main.styled';
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch';
import { isSideMenuVisible, setSideMenuVisible } from '../../redux/sideMenu/sideMenuSlice';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';

const Main = () => {
  const [screenWidth] = useCurrentScreenWidth();
  const dispatch = useDispatch();
  const { visible } = useSelector(isSideMenuVisible);
  return (
    <DashContainer>
      <SideNav />
      <DashMain>
        <DashContent>
          <DashContentTopSection>
            {screenWidth <= BREAKPOINTS.IPAD_PRO && (
              <MenuButton
                size='large'
                edge='start'
                aria-label='menu'
                sx={ { mr: 2 } }
                onClick={ () => dispatch(setSideMenuVisible({ visible: !visible })) }>
                <MenuIcon />
              </MenuButton>
            )}
            <TitleContainer>
              <TitleText variant='h6'>Welcome!</TitleText>
            </TitleContainer>
            <ThemeSwitch />
          </DashContentTopSection>
          <Outlet />
        </DashContent>
      </DashMain>
    </DashContainer>
  );
};

export default Main;
