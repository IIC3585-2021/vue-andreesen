<template>
  <div style=" width: 100%; height: 150px; padding: 10px">
    <search-box :teamNumber="1"/>
    <search-box :teamNumber="2"/>
  </div>
</template>

<script>
import SearchBox from "../components/SearchBox.vue";

export default {
  components: {
    SearchBox,
  },
};
</script>

<style>
</style>