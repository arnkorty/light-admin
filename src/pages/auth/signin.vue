<template>
  <div class="signin">
    <div class="signin-form">
      <h1 class="logo-text">
        <img src="../../assets/logo.png">
      </h1>
      <form>
        <Input v-model="username" size="large" @on-enter="handleLogin">
          <Icon slot="prepend" type="ios-person"></Icon>
        </Input>
        <br>
        <Input v-model="password" type="password" size="large" @on-enter="handleLogin">
          <Icon slot="prepend" type="locked"></Icon>
        </Input>
        <br>
        <Button :type="buttonType" :disabled="!isValid" :loading="isLoading" size="large" @click="handleLogin" long>{{submitText}}</Button>
        <br>
      </form>
    </div>
 </div>
</template>

<script>
// import { EMAIL_REGEXP } from '@/utils'
import { mapState } from 'vuex'
export default {
  name: 'signin',
  data () {
    return {
      username: '',
      password: '',
      valid: false
    }
  },
  computed: {
    isValid () {
      // if (this.password.length > 0) {
        // return EMAIL_REGEXP.test(this.username)
      // }
      return this.password.length > 4 && this.username.length > 3
    },
    ...mapState({
      isLoading: state => state.common.loading,
      buttonType: state => state.common.error_msg.length > 0 ? 'error' : 'success',
      request_failure: state => state.common.request_failure,
      submitText: state => {
        if (state.common.error_msg.length > 0) {
          return state.common.error_msg
        } else {
          return '登陆'
        }
      }
    })
  },
  watch: {
    username: 'handleChange',
    password: 'handleChange'
  },
  methods: {
    login () {
      this.$store.dispatch('auth/login', {username: this.username, password: this.password})
    },
    handleChange () {
      if (this.request_failure) {
        this.$store.commit('common/FRESH_MSG')
      }
    },
    handleLogin () {
      if (this.isValid) {
        this.login()
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .logo-text{
    // font-family: 
    text-align: center;
    font-size: 2.5rem;
  }
  .signin{
    height: 100%;
    padding: 20px 20px 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    .signin-form{
      max-width: 320px;
      width: 100%;
    }
  }

</style>
