import { useDispatch, useSelector } from 'react-redux';
import { DarkThemeSwitch } from './ThemeSwitch.styled';
import { Tooltip } from '@mui/material';
import { setDarkMode } from '../../../redux/darkMode/darkModeSlice';

const ThemeSwitch = () => {
  const { darkMode } = useSelector(state => state.darkMode);
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    dispatch(setDarkMode({ darkMode: !darkMode }));
  };

  return (
    <Tooltip title={ darkMode ? 'Light mode' : 'Dark mode' }>
      <DarkThemeSwitch checked={ darkMode } onChange={ handleThemeChange } />
    </Tooltip>
  );
};

export default ThemeSwitch;
