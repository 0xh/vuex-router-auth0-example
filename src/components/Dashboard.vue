<template>
  <div>
    <h2>In Dashboard</h2>
    <button @click=logoutAndRedirect()>Logout</button>
    <span>{{ count }}</span>
    <button @click=increment()>Increment this!</button>
    <span>{{ userName }}</span>
    <img :src="profileImg">
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default{
    data(){
      return {}
    },
    methods: {
      ...mapActions([ 'increment', 'logout' ]),
      logoutAndRedirect () {
        let self = this
        this.logout().then(resp => {
          self.$router.push('/')
        })
      }
    },
    computed: {
      ...mapState({
        count: state => state.count,
        userName: state => state.auth.userInfo.displayName,
        profileImg: state => state.auth.userInfo.profileImg
      })
    }
  }
</script>
