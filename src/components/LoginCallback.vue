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
      let self = this
      this.login(this.$route.query.jwt).then( () => {
        self.$router.push('/dashboard')
      })
    }
  }
</script>
