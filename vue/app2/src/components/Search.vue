<template>
  <div style=" width: 100%; height: 150px; padding: 10px">
    <search-box :teamNumber="0"/>
    <search-box :teamNumber="1"/>
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