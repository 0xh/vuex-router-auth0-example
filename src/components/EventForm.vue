<template>
  <form action="POST" @submit.stop.prevent=save>
    <input type="text" v-model="vm.title" placeholder="event title">
    <button type="submit">Add Event</button>
    <div class="schedule">
      <button type="button" @click.stop.prevent=addSchedule>Add Schedule</button>
      <input type="text" v-model="titleSchedule" placeholder="schedule title">
      <ul>
        <li v-for="schedule in vm.schedule">
          {{ schedule.title }}
        </li>
      </ul>
    </div>
  </form>
</template>

<style>
</style>

<script>
  import { mapActions } from 'vuex'
  import axios from 'axios'

  export default{
    data () {
      return {
        titleSchedule: '',
        vm: {
          title: '',
          schedule: []
        }
      }
    },
    methods: {
      ...mapActions([ 'saveSchedule', 'saveEvent' ]),
      reset () {
        this.titleSchedule = ''
        this.vm.title = ''
        this.vm.schedule = []
      },
      save () {
        let self = this
        let scheduleRequests = Array.from(self.vm.schedule, self.saveSchedule)
        axios.all(scheduleRequests)
          .then(function (resp) {
            self.vm.schedule = resp.map(it => it.id)
            self.saveEvent(self.vm)
              .then(resp => {
                self.reset()
              })
          });
      },
      addSchedule () {
        this.vm.schedule.push({
          title: this.titleSchedule
        })
        this.titleSchedule = ''
      }
    }
  }
</script>
