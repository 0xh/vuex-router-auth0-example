<template>
  <div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default{
    methods: {
      ...mapActions(['login'])
    },
    mounted(){
      console.log('JWT: ', this.$route.query.jwt)
      this.login(this.$route.query.jwt)
    }
  }
</script>
