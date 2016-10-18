<template>
  <div>
    <h2>Hi {{ userName }}
      <img width="80" :src="profileImg">
    </h2>
    <button @click=logoutAndRedirect()>Logout</button>
    <hr>

    <event-form></event-form>
    <hr>
    <ul >
      <li v-for="event in events">
        <event :data=event></event>
      </li>
    </ul>

  </div>
</template>

<script>
  import event from './Event'
  import eventForm from './EventForm'
  import { mapActions, mapState } from 'vuex'

  export default{
    mounted () {
      this.fetchEvens()
    },
    methods: {
      ...mapActions([ 'logout', 'fetchEvens' ]),
      logoutAndRedirect () {
        let self = this
        this.logout().then(resp => {
          self.$router.push('/')
        })
      }
    },
    computed: {
      ...mapState({
        userName: state => state.auth.userInfo.displayName,
        profileImg: state => state.auth.userInfo.profileImg,
        events: state => state.events.all
      })
    },
    components: { event, eventForm }
  }
</script>
