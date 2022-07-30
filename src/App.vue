<template>
  <img alt="Vue logo" src="./assets/logo.png">
    <MainCard />
    <ProjectData  />
</template>

<script>
import MainCard from "./components/MainCard.vue"
import ProjectData from "./components/ProjectsCard";

export default {
  name: 'App',
  components: {
    MainCard,
    ProjectData
}
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
   
</style>
