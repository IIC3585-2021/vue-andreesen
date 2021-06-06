<template>
  <div>
    <b-container class="container">
      <b-row>
        <b-col>
          <span class="team_name">{{ team.name }}</span>
          <img class="team_logo" :src="team.logo"  alt="">
          <span class="season">{{ team.season }}</span> 
        </b-col>
      </b-row>

      <b-row class="headers_row">
        <b-col class="left_col" cols='4'></b-col>
        <b-col>Home</b-col>
        <b-col>Away</b-col>
        <b-col>Total</b-col>
      </b-row>
      <b-row>
        <b-col class="left_col" cols='4' >Games Played </b-col>
        <b-col >{{team.statistics.fixtures.played.home}}</b-col>
        <b-col>{{team.statistics.fixtures.played.away}}</b-col>
        <b-col>{{team.statistics.fixtures.played.total}}</b-col>
      </b-row>
      <b-row>
        <b-col class="left_col" cols='4' >Wins </b-col>
        <b-col >{{team.statistics.fixtures.wins.home}}</b-col>
        <b-col>{{team.statistics.fixtures.wins.away}}</b-col>
        <b-col>{{team.statistics.fixtures.wins.total}}</b-col>
      </b-row>
      <b-row>
        <b-col class="left_col" cols='4' >Draws </b-col>
        <b-col >{{team.statistics.fixtures.draws.home}}</b-col>
        <b-col>{{team.statistics.fixtures.draws.away}}</b-col>
        <b-col>{{team.statistics.fixtures.draws.total}}</b-col>
      </b-row>
      <b-row>
        <b-col class="left_col" cols='4'>Loses </b-col>
        <b-col>{{team.statistics.fixtures.loses.home}}</b-col>
        <b-col>{{team.statistics.fixtures.loses.away}}</b-col>
        <b-col>{{team.statistics.fixtures.loses.total}}</b-col>
      </b-row>
      <b-row>
        <b-col class="left_col" cols='4'>Goals For </b-col>
        <b-col>{{team.statistics.goals.for.total.home}}</b-col>
        <b-col>{{team.statistics.goals.for.total.away}}</b-col>
        <b-col>{{team.statistics.goals.for.total.total}}</b-col>
      </b-row>
      <b-row>
        <b-col class="left_col" cols='4'>Goals Against </b-col>
        <b-col >{{team.statistics.goals.against.total.home}}</b-col>
        <b-col>{{team.statistics.goals.against.total.away}}</b-col>
        <b-col>{{team.statistics.goals.against.total.total}}</b-col>
      </b-row>

      
    </b-container>
   


  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'teams-selected',
  props: {
    teamNumber: Number
  },
  mounted() {
    console.log(this.team)
  },
 

  computed: mapState({
    team (state) {
      return state.teams[this.teamNumber]
      }
  }),

  
 

}
</script>

<style scoped>

img {
  max-width: 50px;
  max-height: 50px;
}

.team_name {
  color: #38003C;
  margin: 10px;
  font-size: 20px;
  font-weight: 800;

}

.team_logo {
  margin: 10px
}

.season {
  color: #38003C;
  margin: 10px;
  font-size: 20px;
  font-weight: 800;

}

.col {
  background-color: #58FF84;
  color: #38003C;
  border: #38003C 1px solid;
  min-height: 40px;
  padding-top: 7px;
 
}

.container {
  margin-bottom: 50px;
  padding: 5px;
  
  
}

.headers_row {
  font-weight: 900;
  color: #38003C;
}

.left_col {
  font-weight: 900;
  color: #38003C;
  background-color: #58FF84;
  border: #38003C 1px solid;
  padding-top: 7px;
}



</style>