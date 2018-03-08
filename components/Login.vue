<template>
	<b-form inline  @submit.prevent.stop="onSubmit">
    <b-input 
    	v-model.trim="form.email" 
    	required 
    	type="email" 
    	class="mb-2 mr-sm-2 mb-sm-0" 
    	placeholder="Email" />
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-input 
      	v-model.trim="form.password" 
      	required 
      	type="password"
      	placeholder="Password" />
    </b-input-group>
    <b-button type="submit">Login</b-button>
  </b-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit(evt) {
      this.$store.dispatch('authenticate', this.form)
        .then((result) => {
          if (result) {
            this.$router.push('/journals');
          } else {
            alert('Could not log you in'); // eslint-disable-line no-alert
          }
        });     
    }
  }
};
</script>