<template>
  <div id="app">
    <h1>Team Comparator Tool</h1>
    <div>
      <search/>  
    </div>
    <div>
      <teams-comparison/>
    </div> 
    
  </div>
</template>

<script>
import Search from './components/Search.vue'
import TeamsComparison from './components/TeamsComparison.vue'

export default {
  name: 'App',
  components: {
    Search,
    TeamsComparison
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
