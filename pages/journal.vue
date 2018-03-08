<template>
  <div class="container">
    <div class="form-pane">
      <h2>Decision #</h2>
      <b-form-group>
        <b-form-input type="text"
                      :value="journal.index"
                      disabled
                      placeholder="Decision #">
        </b-form-input>
      </b-form-group>
      <h2>Date</h2>
      <b-form-group>
        <b-form-input type="text" :value="new Date(journal.date)" disabled>
        </b-form-input>
      </b-form-group>
      <h2>Decision</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            :value="journal.decision"
            disabled>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane">
      <h2>Your mental or physical state</h2>
      <b-row>
        <b-col>
          <b-form-checkbox 
            v-if="journal.energized" 
            :class="hideClass(journal.energized)"
            disabled
            v-model="journal.energized">
            Energized
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox 
            v-if="journal.focused"
            :class="hideClass(journal.focused)"
            disabled
            v-model="journal.focused">
            Focused
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox  
            v-if="journal.relaxed"
            :class="hideClass(journal.relaxed)"
            disabled
            v-model="journal.relaxed">
            Relaxed
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox 
            v-if="journal.confident"
            :class="hideClass(journal.confident)"
            disabled
            v-model="journal.confident">
            Confident
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox  
            v-if="journal.tired"
            :class="hideClass(journal.tired)"
            disabled
            v-model="journal.tired">
            Tired
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox  
            v-if="journal.accepting"
            :class="hideClass(journal.accepting)"
            disabled
            v-model="journal.accepting">
            Accepting
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox  
            v-if="journal.accommodating"
            :class="hideClass(journal.accommodating)"
            disabled
            v-model="journal.accommodating">
            Accomodating
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox  
            v-if="journal.anxious"
            :class="hideClass(journal.anxious)"
            disabled
            v-model="journal.anxious">
            Anxious
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox  
            v-if="journal.resigned"
            :class="hideClass(journal.resigned)"
            disabled
            v-model="journal.resigned">
            Resigned
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox  
            v-if="journal.frustrated"
            :class="hideClass(journal.frustrated)"
            disabled
            v-model="journal.frustrated">
            Frustrated
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox  
            v-if="journal.angry"
            :class="hideClass(journal.angry)"
            disabled
            v-model="journal.angry">
            Angry
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox  
            v-if="journal.excited"
            :class="hideClass(journal.excited)"
            disabled
            v-model="journal.excited">
            Excited
          </b-form-checkbox>          
        </b-col>
      </b-row>
    </div>
    <div class="form-pane">
      <h2>The situation</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            :value="journal.situation"
            disabled>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane">
      <h2>The problem statement</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            :value="journal.problemStatement"
            disabled>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane">
      <h2>Variables that govern the situation</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            :value="journal.variables"
            disabled>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane">
      <h2>Complications</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            :value="journal.complications"
            disabled>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane">
      <h2>Alternatives that were considered but not chosen</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            :value="journal.alternatives"
            disabled>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane">
      <h2>Range of outcomes</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            :value="journal.outcomeRange"
            disabled>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane">
      <h2>What you expect to happen and their probabilities</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            :value="journal.expectations"
            disabled>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane">
      <h2>The chosen outcome</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            :value="journal.outcome"
            disabled>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane">
      <h2>Review date</h2>
      <b-form-group>
        <b-form-input type="text" :value="new Date(journal.reviewDate)" disabled>
        </b-form-input>
      </b-form-group>     
    </div>
    <div class="form-pane">
      <h2>What happened</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            v-model="whatHappened"
            :disabled="!canReview">
        </b-form-textarea>
      </b-form-group>     
    </div>
    <b-row class="mb-3 mt-3">
      <b-col xs="3"></b-col>
      <b-col xs="6" class="text-center">        
        <b-button v-if="canReview" @click="save()" size="lg" variant="outline-secondary">Save</b-button>          
      </b-col>
      <b-col xs="3"></b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  layout: 'page',
  data() {
    return {
      whatHappened: ''
    };
  },
  created() {
    this.whatHappened = this.journal.whatHappened;
  },
  computed: {
    canReview() {
      const { reviewDate, whatHappened } = this.journal;
      return reviewDate <= Date.now() && whatHappened.length === 0;
    },
    journal() {
      return this.$store.getters.getJournals.find(({ id }) => id === this.$route.query.id);
    }
  },
  methods: {
    save() {
      const data = Object.assign({ ...this.journal }, { __ob__: null, whatHappened: this.whatHappened });
      this.$store.dispatch('saveJournal', data);
    },
    hideClass(shouldShow) {
      return !shouldShow ? 'd-none' : '';
    }
  }
};
</script>