<template>
  <div class="profile form">
    <form>
      <Row class="form-control">
        <Col :sm="5" :xs="24">
          <Label>
            First name
          </Label>
        </Col>
        <Col :sm=12 :xs="24">
          <Input v-model="first_name" @on-enter="handleUpdateProfile"></Input>
        </Col>
      </Row>
      <Row class="form-control">
        <Col :sm="5" :xs="24">
          <Label>
            Last name
          </Label>
        </Col>
        <Col :sm=12 :xs="24">
          <Input v-model="last_name" @on-enter="handleUpdateProfile"></Input>
        </Col>
      </Row>
      <Row class="actions">
        <Col :sm="{span: 12, offset: 5}" >
          <Button type="success" @click="handleUpdateProfile" :loading="requested && loading">更新</Button>
        </Col>
      </Row>
    </form>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'profile',
  data () {
    return {
      requested: false,
      input: {
        first_name: '',
        last_name: ''
      }
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('common', ['loading']),
    first_name: {
      get () {
        if (this.user) {
          return this.user.first_name
        }
      },
      set (val) {
        this.input.first_name = val
      }
    },
    last_name: {
      get () {
        if (this.user) {
          return this.user.last_name
        }
      },
      set (val) {
        this.input.last_name = val
      }
    }
  },
  methods: {
    handleUpdateProfile () {
      this.requested = true
      this.update_profile(this.input)
    },
    ...mapActions('auth', ['update_profile'])
  }
}
</script>
