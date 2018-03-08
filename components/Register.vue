<template>
  <b-form @submit.prevent.stop="onSubmit">
    <b-form-group>
      <b-form-input type="text"
                    v-model.trim="form.name"
                    required
                    placeholder="Name">
      </b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input type="email"
                    v-model.trim="form.email"
                    required
                    placeholder="Email">
      </b-form-input>
    </b-form-group>
    <b-form-group>
      <password-input v-model="form.password"></password-input>
    </b-form-group>
    <b-button type="submit">Register</b-button>
  </b-form>
</template>
<script>
import PasswordInput from './PasswordInput';

export default {
  components: {
    PasswordInput
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit(evt) {
      this.$store.dispatch('signup', this.form)
        .then((result) => {
          if (result) {
            this.$router.push('/journals');
          } else {
            alert('Could not sign you up'); // eslint-disable-line no-alert
          }
        });     
    }
  }
};
</script>
