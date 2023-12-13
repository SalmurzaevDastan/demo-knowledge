import { MUIProvider } from '../assets/MuiProvider';
import './styles/App.css';
import Router from './routes/Router';

function App() {
  return (
    <MUIProvider>
      <Router />
    </MUIProvider>
  );
}

export default App;
