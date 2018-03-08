<template>
  <div class="container">
    <div class="form-pane" v-if="step === 1">
      <b-form-group label="Decision #">
        <b-form-input type="text"
                      v-model.trim="index"
                      required
                      placeholder="Decision #">
        </b-form-input>
        <small v-if="indexUsed">This index has been used</small>
      </b-form-group>
      <b-form-group label="Date">
        <no-ssr>
          <datepicker v-model="decision.date" :full-month-name="true"></datepicker>
        </no-ssr>
      </b-form-group>
      <b-form-group label="Time">
        <b-form-input type="time" v-model.trim="time" required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="Decision">
        <b-form-textarea type="textarea" 
            :rows="4"
            v-model="decision.decision"
            required>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane" v-if="step === 2">
      <h2>What is your mental or physical state?</h2>
      <b-row>
        <b-col>
          <b-form-checkbox v-model="decision.energized">
            Energized
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox v-model="decision.focused">
            Focused
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox v-model="decision.relaxed">
            Relaxed
          </b-form-checkbox>          
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-checkbox v-model="decision.confident">
            Confident
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox v-model="decision.tired">
            Tired
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox v-model="decision.accepting">
            Accepting
          </b-form-checkbox>          
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-checkbox v-model="decision.accommodating">
            Accomodating
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox v-model="decision.anxious">
            Anxious
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox v-model="decision.resigned">
            Resigned
          </b-form-checkbox>          
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-checkbox v-model="decision.frustrated">
            Frustrated
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox v-model="decision.angry">
            Angry
          </b-form-checkbox>          
        </b-col>
        <b-col>
          <b-form-checkbox v-model="decision.excited">
            Excited
          </b-form-checkbox>          
        </b-col>
      </b-row>
    </div>
    <div class="form-pane" v-if="step === 3">
      <h2>What is the situation or context?</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            v-model="decision.situation"
            required>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane" v-if="step === 4">
      <h2>What is the problem statement or frame?</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            v-model="decision.problemStatement"
            required>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane" v-if="step === 5">
      <h2>What are the variables that govern the situation?</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            v-model="decision.variables"
            required>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane" v-if="step === 6">
      <h2>What are the complications or complexities as you see them?</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            v-model="decision.complications"
            required>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane" v-if="step === 7">
      <h2>What are alternatives that were considered but not chosen?</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            v-model="decision.alternatives"
            required>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane" v-if="step === 8">
      <h2>Explain the range of outcomes</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            v-model="decision.outcomeRange"
            required>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane" v-if="step === 9">
      <h2>What do you expect to happen and what are their probabilities?</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            v-model="decision.expectations"
            required>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane" v-if="step === 10">
      <h2>What is the (chosen) outcome?</h2>
      <b-form-group>
        <b-form-textarea type="textarea" 
            :rows="4"
            v-model="decision.outcome"
            required>
        </b-form-textarea>
      </b-form-group>     
    </div>
    <div class="form-pane" v-if="step === 11">
      <h2>When would you like to review your decision</h2>
      <b-form-group label="Date">
        <no-ssr>
          <datepicker v-model="decision.reviewDate" :full-month-name="true"></datepicker>
        </no-ssr>
      </b-form-group>
      <b-form-group label="Time">
        <b-form-input type="time" v-model.trim="review_time" required>
        </b-form-input>
      </b-form-group>     
    </div>


    <b-row class="mb-3 mt-3">
      <b-col xs="6" class="text-center">
        <b-button v-if="step !== 1" @click="previous()" size="lg" variant="outline-secondary">Previous</b-button>
      </b-col>
      <b-col xs="6" class="text-center">
        <b-button v-if="step !== 11" @click="next()" size="lg" variant="outline-secondary">Next</b-button>          
        <b-button v-else @click="save()" size="lg" variant="outline-secondary">Save</b-button>          
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker';

export default {
  layout: 'page',
  components: {
    Datepicker
  },
  data() {
    const date = new Date();
    const reviewDate = new Date();
    const usedIndexes = this.$store.getters.getJournals.map(({ index }) => index);

    return {
      step: 1,
      usedIndexes,
      index: usedIndexes.length + 1,
      time: `${date.getHours()}:${date.getMinutes()}`,
      review_time: `${reviewDate.getHours()}:${reviewDate.getMinutes()}`,
      decision: {
        index: usedIndexes.length + 1,
        date,
        reviewDate,
        decision: '',
        energized: false,
        focused: false,
        relaxed: false,
        confident: false,
        tired: false,
        accepting: false,
        accommodating: false,
        anxious: false,
        resigned: false,
        frustrated: false,
        angry: false,
        excited: false,
        situation: '',
        problemStatement: '',
        variables: '',
        complications: '',
        alternatives: '',
        outcomeRange: '',
        expectations: '',
        outcome: '',
        whatHappened: ''
      }
    };
  },
  computed: {
    indexUsed() {
      return !!this.usedIndexes.find(idx => idx === this.index);
    }
  },
  watch: {
    index(val) {
      this.decision.index = val;
    },
    time(val) {
      const [hours, minutes] = val.split(':');
      this.decision.date.setHours(hours);
      this.decision.date.setMinutes(minutes);
      this.decision.date.setSeconds(0);
    },    
    review_time(val) {
      const [hours, minutes] = val.split(':');
      this.decision.reviewDate.setHours(hours);
      this.decision.reviewDate.setMinutes(minutes);
      this.decision.reviewDate.setSeconds(0);
    }
  },
  methods: {
    previous() {
      this.step = this.step === 1 ? this.step : this.step - 1;
    },
    next() {
      if (this.indexUsed) {
        alert('Index has been used'); // eslint-disable-line no-alert
        return;
      }

      this.step = this.step < 11 ? this.step + 1 : this.step;
    },
    save() {
      const data = Object.assign({}, this.decision);
      data.date = data.date.getTime();
      data.reviewDate = data.reviewDate.getTime();

      this.$store.dispatch('saveJournal', data)
        .then((result) => {
          if (result) {
            this.$router.push('/journals');
          }
        });
    }
  }
};
</script>
<style lang="scss">
  .vdp-datepicker input[readonly] {
    width: 100%;
  }
</style>