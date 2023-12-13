import { store } from '../app/store';
import { patchAuthorizationHeader } from '../redux/api/http-query-client';

export function applyTokenFromState() {
  const state = store.getState();
  const { token } = state.user;
  if (token) {
    patchAuthorizationHeader(token);
  }
}
