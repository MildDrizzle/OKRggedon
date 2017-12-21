<template>
  <div>
    <div class="login">
      <figure>
        <img src="/static/img/icon_google.png" alt="Google">
      </figure>
      <span class="login-text">Sign in with Google</span>
    </div>
    <btn-add></btn-add>
  </div>
</template>

<script>
import BtnAdd from '@/components/BtnAdd'

export default {
  name: 'home',
  components: { BtnAdd },

  data () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style>
.login {
  background-color: white;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
  width: 90%;
  margin: 0 auto;
  display: flex;
}

.login-text {
  font-size: 14pt;
  line-height: 3.5em;
  font-weight: bold;
  color: #555;
}

</style>
