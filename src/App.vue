<template>
   <div id="app">
      <nav>
          <router-link to="/">
            <div class="logo">
                Twotter
            </div>
          </router-link>
          <div class="user">
            {{state.user.username}}
          </div>
      </nav>
      <router-view />
   </div>
</template>

<script>
import {reactive} from 'vue';

export default {
  name: 'App',
  setup(){

    const state = reactive({
        user:{
          username: '_DoddyMatabaero'
        }
    })

    return{
      state
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
