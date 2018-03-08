export default function ({ $axios, redirect, store }) {
  $axios.onRequest((config) => {
    const { token = '' } = store.getters.getUser;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  $axios.onResponse(({ data }) => data);
}
