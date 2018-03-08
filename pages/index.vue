<template>
  <div class="container">
    <b-row>
      <b-col md="6" sm="12">
        <div class="board">
          <h1>Decision Journal</h1>
        </div>
      </b-col>
      <b-col md="6" sm="12">
        <b-row>
          <b-col sm="12" style="margin-top: 20px; margin-bottom: 20px;">
            <h2>Login</h2>
            <login></login>            
          </b-col>
          <b-col sm="12" style="margin-top: 20px; margin-bottom: 20px;">
            <h2>Register</h2>
            <register></register>            
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Register from '~/components/Register';
import Login from '~/components/Login';

export default {
  components: {
    Register,
    Login
  }
};
</script>

<style scoped>
.board { 
  min-height: 80vh; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  text-align: center; 
} 
</style>
