import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { routes } from '../../routes/routes';

export const menuItems = [
  { name: 'My Profile', path: routes.account, icon: AccountCircleIcon },
  { name: 'People', path: routes.people, icon: PeopleIcon }
];
