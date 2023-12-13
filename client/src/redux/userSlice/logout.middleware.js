import { persistor } from '../../app/store';
import { logOut } from './userSlice';

export const purgeOnLogoutMiddleware = () => next => action => {
  if (action.type === logOut.type) {
    persistor.purge();
  }
  return next(action);
};
