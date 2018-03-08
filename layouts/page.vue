<template>
  <div class="layout">
    <header class="mb-3">
      <b-navbar toggleable="md">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="/">Decision Journal</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <b-nav-item :active="currentRoute() === 'new'" href="/new">New journal</b-nav-item>
            <b-nav-item :active="currentRoute() === 'journals'" href="/journals">Journals</b-nav-item>
            <b-nav-item :active="currentRoute() === 'settings'" href="/settings" v-if="false">Settings</b-nav-item>
            <b-nav-item href="javascript:;" @click="signOut()">Sign out</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>     
    </header>
    <nuxt/>
  </div>
</template>
<script>
export default {
  methods: {
    currentRoute() {
      return this.$route.name;
    },
    signOut() {
      this.$store.dispatch('deleteUser')
        .then(() => {
          this.$router.push('/');
        });
    }
  }
};
</script>
<style lang="scss">
  @import '../assets/index.scss';
</style>
