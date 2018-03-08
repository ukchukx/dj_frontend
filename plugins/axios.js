export default function ({ $axios, redirect, store }) {
  $axios.onRequest((config) => {
    const { token = '' } = store.getters.getUser;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  $axios.onResponse(({ data }) => data);

  $axios.onError(({ response }) => {
    /* eslint-disable dot-notation */
    /* eslint-disable radix */
    const code = parseInt(response && response.status);
    if (code === 403 && response['message'] === 'Access Denied') { // not authenticated
      store.dispatch('deleteUser').then(() => {
        redirect('/');
      });
    }
  });
}
