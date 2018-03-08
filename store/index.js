import { Store } from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies
import createPersistedState from 'vuex-persistedstate';
import createMutationsSharer from 'vuex-shared-mutations';
import * as Cookies from 'js-cookie';
import databin from './modules/databin';
import nuxt from './modules/nuxt';

const creatStore = () => new Store({
  modules: { databin, nuxt },
  strict: true,
  plugins: [
    createMutationsSharer({
      predicate: (mutation, state) => true
    }),
    createPersistedState({ 
      key: 'dj',
      path: ['databin.user'],
      storage: {
        getItem: key => Cookies.getJSON(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 7, secure: false }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
});

export default creatStore;
