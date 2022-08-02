<template>
   <div id="app">
      <nav>
          <div class="logo">
              Twotter
          </div>
          <div class="user">
            {{user.username}}
          </div>
      </nav>
      <UserProfile />
   </div>
</template>

<script>
import UserProfile from "./components/UserProfile.vue"

export default {
  name: 'App',
    components: {
      UserProfile,
  },
  data(){
    return{
      user:{
        username: "_DoddyMatabaro",
      }
    }
  }
}
</script>

<style scoped>
  body{
      background-color: rgb(210, 205, 199);

  }
  #app {
    width: 100vw;
    height: 100vh;
      background-color: rgb(210, 205, 199);
  }
  nav{
     display: flex;
     flex-direction: row;
     justify-content: space-between; 
     font-weight: bold;
     background-color: red;
     margin: 0;
     padding: 25px 50px;
     color: white;
     margin-bottom: 10px;
  }

  

</style>
