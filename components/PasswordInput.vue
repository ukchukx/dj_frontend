<template>
	<b-input-group>
    <b-form-input :type="inputType" v-model.trim="val" @input="onInput" placeholder="Password">
    </b-form-input>
    <span class="input-group-btn">
	    <b-button class="show-button" @click="toggle">{{ showText }}</b-button>
	  </span>
  </b-input-group>
</template>
<script>
export default {
  data() {
    return {
      val: '',
      show: false,
      showText: 'Show',
      inputType: 'password'
    };
  },
  methods: {
    clear() {
      this.val = '';
    },
    toggle() {
      if (this.show) {
        this.showText = 'Show';
        this.inputType = 'password';
      } else {
        this.showText = 'Hide';
        this.inputType = 'text';
      }
      this.show = !this.show;
    },
    onInput(value) {
      this.$emit('input', value);
    }
  }
};
</script>
<style>
	button.show-button {
		border-bottom-left-radius: 0px !important;
    border-top-left-radius: 0px !important;
	}
</style>