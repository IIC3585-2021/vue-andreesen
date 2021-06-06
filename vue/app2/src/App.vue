<template>
  <div id="app">
    <h1>Team Comparator Tool</h1>
    <search/>
    <teams-selected/>
    <teams-comparison/>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import TeamsSelected from './components/TeamsSelected.vue'
import TeamsComparison from './components/TeamsComparison.vue'

export default {
  name: 'App',
  components: {
    TeamsSelected,
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
