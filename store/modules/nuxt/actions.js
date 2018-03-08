import Cookie from 'cookie';
import { SAVE_USER } from '~/store/modules/databin/mutation-types';

export function nuxtServerInit({ commit, dispatch }, { req, route, redirect }) {
  let user = {};

  if (req.headers.cookie) {
    const { dj = {} } = Cookie.parse(req.headers.cookie);
    const { databin = {} } = JSON.parse(dj);
    user = databin ? databin.user || {} : {};
  }

  commit(SAVE_USER, user);

  // eslint-disable-next-line dot-notation
  if (route['name'] === 'index') {
    if (user.token) redirect('/journals'); // If signed in, go to journal page
  } else if (!user.token) {
    redirect('/');
  }

  return user.token ? dispatch('fetchJournals') : true;
}
