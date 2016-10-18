<template>
  <div>
    <span>{{ data.title }}</span>
  </div>
</template>

<style>
</style>

<script>
  export default{
    props: {
      data: {
        required: true
      }
    }
  }
</script>
