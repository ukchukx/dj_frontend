import * as actions from './actions';
import * as getters from './getters';
import { SAVE_USER, SAVE_JOURNAL, SAVE_JOURNALS } from './mutation-types';

const initialState = {
  user: {},
  journals: []
};

const mutations = {
  [SAVE_USER](state, user) {
    state.user = user;
  },
  [SAVE_JOURNALS](state, journals) {
    // eslint-disable-next-line no-nested-ternary
    // eslint-disable-next-line no-confusing-arrow
    state.journals = journals.sort((a, b) => (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0));
  },
  [SAVE_JOURNAL](state, journal) {
    const idx = state.journals.findIndex(j => j.id === journal.id);
    if (idx !== -1) {
      state.journals.splice(idx, 1, journal);
    } else {
      state.journals.push(journal);
    }
  }
};


export default {
  state: Object.assign({}, initialState),
  actions,
  getters,
  mutations
};
