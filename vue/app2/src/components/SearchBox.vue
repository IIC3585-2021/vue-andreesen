<template>
  <div style="width: 50%; float: left">
    <h3>Select team {{ teamNumber + 1 }}:</h3>
    <b-row class="my-1">
      <b-col sm="2">
        <label class='select_season' for="input-valid">Select season</label>
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
        <button v-on:click="fetchTeams">Search</button>
      </b-col>
      <b-col sm="9">
        <b-form-select
          @change="teamSelected"
          v-model="selected"
          :options="options"
          style="width: 100%"
        ></b-form-select>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import axios from "axios";
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
      ...mapMutations([
          'changeTeam'
      ]),
    async fetchTeams() {
      console.log(this.season);
      const res = await axios.get(
        `https://api-football-v1.p.rapidapi.com/v3/teams`,
        {
          headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "105a83c7c1msh176726663ad9425p1520d1jsn92b2b13b5a77",
          },
          params: {
            league: 39,
            season: this.season,
          },
        }
      );
      const jsonResponse = await res.data.response;
      let teams = [];
      teams.push({ value: null, text: "Select a team" });
      jsonResponse.forEach((element) => {
        teams.push({
          value: {
              id: element.team.id,
              name: element.team.name,
              logo: element.team.logo
          }, 
          text: element.team.name,
        });
      });
      this.options = teams;
    },

    async teamSelected(){
        if (this.selected != null){
            const res = await axios.get(
        "https://api-football-v1.p.rapidapi.com/v3/teams/statistics",
        {
          headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "105a83c7c1msh176726663ad9425p1520d1jsn92b2b13b5a77",
          },
          params: {
            league: 39,
            season: this.season,
            team: this.selected.id
          },
        }
      );
      const jsonResponse = await res.data.response;
      
      console.log(jsonResponse)
      const newTeam = {
          id: this.selected.id,
          league: 39,
          season: this.season,
          name: this.selected.name,
          logo: this.selected.logo,
          statistics: {
              goals: jsonResponse.goals,
              fixtures: jsonResponse.fixtures
          }
      }
      const teamNumber = this.teamNumber;
      this.$store.commit('changeTeam', {newTeam, teamNumber})
    }
        }
        
  },
};
</script>

<style>
.show {
  display: none !important;
}

h3 {
  color: #E90B52;
}

.select_season {
   color: #FFFFFF;
}
</style>