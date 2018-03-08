import { SAVE_USER, SAVE_JOURNAL, SAVE_JOURNALS } from './mutation-types';

export async function fetchJournals({ commit }) {
  return this.$axios.get('/journals.list')
    .then(({ data }) => {
      commit(SAVE_JOURNALS, data);
      return true;
    })
    .catch(err => false);
}

export function signup({ commit }, params) {
  return this.$axios.post('/accounts.signup', params)
    .then(({ data }) => {
      commit(SAVE_USER, data);
      return true;
    })
    .catch(err => false);
}

export function authenticate({ commit }, creds) {
  return this.$axios.post('/accounts.authenticate', creds)
    .then(({ data }) => {
      commit(SAVE_USER, data);
      return true;
    })
    .catch(err => false);
}

export function saveJournal({ commit }, journal) {
  if (journal.id.length) { // update
    this.$axios.post('/journals.updateWhatHappened', journal)
      .then(({ data }) => {
        commit(SAVE_JOURNAL, data);
        return true;
      })
      .catch(err => false);
  } else {
    this.$axios.post('/journals.create', journal)
      .then(({ data }) => {
        commit(SAVE_JOURNAL, data);
        return true;
      })
      .catch(err => false);
  }
}

export function deleteUser({ commit }) {
  commit(SAVE_USER, {});
}
