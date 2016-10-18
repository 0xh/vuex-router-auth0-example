<template>
  <div>
    <span>{{ data.title }}</span>
    <pre>{{ data.scheduleIds | json }}</pre>
  </div>
</template>

<script>
  export default{
    props: {
      data: {
        required: true
      }
    }
  }
</script>
