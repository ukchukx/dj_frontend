<template>
  <div class="container">
    <div class="text-center mt-3 mb-3" v-if="!journals.length">
      <h1 class="empty-text mb-3">
        You do not have any journals
      </h1>
      <a href="/new" class="new-link">Create a journal</a>
    </div>
    <b-list-group v-else class="mb-3 mt-3">
      <b-list-group-item 
        v-for="journal in journals"
        :key="journal.id"
        :href="journal.url" 
        :class="getListItemClasses(journal)">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ journal.index }}</h5>
          <small>Created {{ journal.dateString }}</small>
        </div>
        <p class="mb-1">
          {{ journal.decision }}
        </p>
        <small v-if="!journal.whatHappened.length">Can be reviewed {{ journal.reviewDateString }}</small>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
import moment from 'moment-mini';

export default {
  layout: 'page',
  computed: {
    journals() {
      return this.$store.getters.getJournals
        .map(journal => Object.assign(
          journal, 
          { 
            canReview: this.canReview(journal),
            dateString: moment(journal.createdAt).fromNow(),
            reviewDateString: moment(journal.reviewDate).fromNow(),
            url: `/journal?id=${journal.id}`
          }
        ));
    }
  },
  methods: {
    canReview({ reviewDate, whatHappened }) {
      return reviewDate <= Date.now() && whatHappened.length === 0;
    },
    getListItemClasses({ canReview }) {
      return `flex-column align-items-start${canReview ? ' list-group-item-info' : ''}`;
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