<template>
  <div class="container">
    <div class="text-center mt-3" v-if="!journals.length">
      <h1 class="empty-text mb-3">
        You do not have any journals
      </h1>
      <a href="/new" class="new-link">Create a journal</a>
    </div>
    <b-list-group v-else>
      <b-list-group-item href="#" class="flex-column align-items-start list-group-item-info">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas
          sed diam eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </b-list-group-item>
      <b-list-group-item href="#" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas
          sed diam eget risus varius blandit.
        </p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </b-list-group-item>
      <b-list-group-item href="#" disabled class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Disabled List group item</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas
          sed diam eget risus varius blandit.
        </p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>

export default {
  layout: 'page',
  computed: {
    journals() {
      return this.$store.getters.getJournals;
    }
  }
};
</script>
<style scoped>
  .empty-text {
    color: #bbb;
  }
  .new-link {
    font-size: 1.5rem;
  }
</style>