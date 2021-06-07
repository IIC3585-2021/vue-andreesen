<template>
  <div style=" width: 100%; height: 150px; padding: 10px">
      <b-container>
      <b-row >
          <b-col >
            <search-box :teamNumber="0"/>
        </b-col>
        <b-col >
            <search-box :teamNumber="1"/>
        </b-col>
      </b-row>
      </b-container>
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