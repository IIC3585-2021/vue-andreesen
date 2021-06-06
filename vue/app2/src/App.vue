<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <search/>
    <teams-selected/>
    <teams-comparison/>
  </div>
</template>

<script>
import Search from '../../app/src/components/Search.vue'
import TeamsSelected from '../../app/src/components/TeamsSelected.vue'
import HelloWorld from './components/HelloWorld.vue'
import TeamsComparison from './components/TeamsComparison.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
