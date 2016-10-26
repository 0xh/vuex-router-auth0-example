<template>
  <form action="POST" @submit.stop.prevent=save>
    <input type="text" v-model="vm.title" placeholder="event title">
    <button type="submit">Add Event</button>
    <div class="schedule">
      <button type="button" @click.stop.prevent=addSchedule>Add Schedule</button>
      <input type="text" v-model="titleSchedule" placeholder="schedule title">
      <schedules :schedules=schedules></schedules>
    </div>
  </form>
</template>

<style>
</style>

<script>
  import schedules from './Schedules'
  import { mapActions } from 'vuex'
  import axios from 'axios'

  export default{
    data () {
      return {
        titleSchedule: '',
        schedules: [],
        vm: {
          title: '',
          scheduleIds: []
        }
      }
    },
    methods: {
      ...mapActions([ 'saveSchedule', 'saveEvent' ]),
      reset () {
        this.titleSchedule = ''
        this.schedules = []
        this.vm.title = ''
        this.vm.scheduleIds = []
      },
      save () {
        let self = this
        let scheduleRequests = Array.from(self.schedules, self.saveSchedule)
        axios.all(scheduleRequests)
          .then(function (resp) {
            self.vm.scheduleIds = resp.map(it => it.id)
            self.saveEvent(self.vm)
              .then(self.reset)
          })
      },
      addSchedule () {
        this.schedules.push({
          title: this.titleSchedule
        })
        this.titleSchedule = ''
      }
    },
    components: { schedules }
  }
</script>
