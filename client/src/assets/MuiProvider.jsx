import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme
} from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
const themeColors = createTheme({
  main: {
    subtitle: '#727272',
    black: '#212121',
    white: '#FFFFFF',
    authBackground: '#6E64DB',
    revision: '#3F50B5'
  }
});

const lightColors = {
  primary: {
    main: '#5D62FB',
    dashbackground: '#F9F8FA',
    sidenav: '#FFFFFF',
    sidenavHover: 'linear-gradient(90deg, #FFFFFF 7.33%, rgba(255, 255, 255, 0) 54.67%), #F9F8FA',
    blackAndWhite: '#212121',
    wizzard: '#F3F3F3F3'
  }
};
const darkColors = {
  primary: {
    main: '#5D62FB',
    dashbackground: '#171517',
    sidenav: '#252125',
    headerTitle: '#ACAAAC',
    sidenavHover: `linear-gradient(270.01deg, #171517 0.01%, rgba(38, 38, 38, 0.15) 132.58%)`,
    blackAndWhite: '#FFFFFF',
    wizzard: '#413B41'
  }
};

const lightTheme = createTheme({
  palette: {
    ...themeColors,
    ...lightColors,
    mode: 'light'
  },
  typography: {
    htmlFontSize: 16
  }
});

const darkTheme = createTheme({
  palette: {
    ...themeColors,
    ...darkColors,
    mode: 'dark'
  },
  typography: {
    htmlFontSize: 16
  }
});

export const MUIProvider = ({ children }) => {
  const { darkMode } = useSelector(state => state.darkMode);

  return (
    <StyledEngineProvider>
      <MuiThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
        <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
          <LocalizationProvider dateAdapter={ AdapterMoment }>{children}</LocalizationProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
