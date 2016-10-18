<template>
  <li>
    <span>{{ data.title }}</span>
    <schedules :schedules=eventSchedules></schedules>
  </li>
</template>

<script>
  import schedules from './Schedules'
  import { mapGetters, mapState } from 'vuex'
  import _ from 'lodash'

  export default{
    props: {
      data: {
        required: true
      }
    },
    computed: {
      ...mapState({
        schedules: state => state.schedules.all
      }),
      eventSchedules () {
        return _.filter(this.schedules, s => this.data.scheduleIds.indexOf(s.id) >= 0)
      }
    },
    components: { schedules }
  }
</script>
