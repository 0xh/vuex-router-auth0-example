<template>
  <div>
    <h2>Hi {{ userName }}
      <img width="80" :src="profileImg">
    </h2>
    <button @click=logoutAndRedirect()>Logout</button>
    <hr>

    <event-form></event-form>
    <hr>
    <ul v-if=!isLoading>
      <event v-for="event in events" :data=event></event>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import event from './Event'
  import eventForm from './EventForm'
  import { mapActions, mapState } from 'vuex'

  export default {
    data () {
      return {
        isLoading: true
      }
    },
    mounted () {
      axios.all([ this.fetchSchedules(), this.fetchEvents() ])
        .then(function () {
          this.isLoading = false
        })
    },
    methods: {
      ...mapActions([ 'logout', 'fetchEvents', 'fetchSchedules' ]),
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
