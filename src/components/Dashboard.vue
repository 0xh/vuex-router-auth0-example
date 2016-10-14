<template>
  <div>
    <h2>In Dashboard</h2>
    <span>{{ userName }}</span>
    <span>{{ count }}</span>
    <button @click=increment()>Increment this!</button>
  </div>
</template>

<style>
</style>

<script>
  import { mapActions, mapState } from 'vuex'

  export default{
    data(){
      return {}
    },
    methods: {
      ...mapActions([ 'increment' ])
    },
    computed: {
      ...mapState({
        count: state => state.count,
        userName: state => state.auth.userInfo.userName
      })
    }
  }
</script>
