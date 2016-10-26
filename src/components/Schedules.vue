<template>
  <ul>
    <li v-for="schedule in schedules">
      {{ schedule.title }}
    </li>
  </ul>
</template>

<style>
</style>

<script>
  export default{
    props: {
      schedules: {
        type: Array,
        require: true
      }
    }
  }
</script>
