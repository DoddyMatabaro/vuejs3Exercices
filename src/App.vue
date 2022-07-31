<template>
   <UserProfile />
</template>

<script>
import UserProfile from "./components/UserProfile.vue"

export default {
  name: 'App',
  components: {
    UserProfile,
}
}
</script>

<style>
  #app {
      /* background-color: rgb(210, 205, 199); */
  }
  body{
      background-color: rgb(210, 205, 199);
  }
   
</style>
