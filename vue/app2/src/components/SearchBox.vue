<template>
  <div style="width: 50%; float: left">
    <h3>Select team {{ teamNumber }}:</h3>
    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-valid">Select season</label>
      </b-col>
      <b-col sm="9">
        <b-form-input
          id="input-valid"
          :state="seasonValid"
          v-model="season"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          Select year between 1850 and 2020
        </b-form-invalid-feedback>
      </b-col>
    </b-row>
    <b-row
      class="my-1"
      v-bind:class="{ show: !(season >= 1850 && season <= 2020) }"
    >
      <b-col sm="2">
        <button v-on:click="fetchTeams">Search teams</button>
      </b-col>
      <b-col sm="9">
        <b-form-select
          v-model="selected"
          :options="options"
          style="width: 100%"
        ></b-form-select>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      season: "",
      team: "",
      selected: null,
      options: [{ value: null, text: "<-- Press button to search teams " }],
    };
  },
  props: {
    teamNumber: Number,
  },
  computed: {
    seasonValid() {
      return this.season >= 1850 && this.season <= 2020;
    },
  },
  methods: {
    fetchTeams: async function () {
      const response = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/teams?league=39&season=" + String(this.season),
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "105a83c7c1msh176726663ad9425p1520d1jsn92b2b13b5a77",
          },
        }
      );
      console.log(response.json().response)
    },
  },
};
</script>

<style>
.show {
  display: none !important;
}
</style>