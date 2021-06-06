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
        <b-col></b-col>
        <b-col >Home</b-col>
        <b-col>Away</b-col>
        <b-col>Total</b-col>
      </b-row>
      <b-row>
        <b-col >Games Played </b-col>
        <b-col >{{response.fixtures.played.home}}</b-col>
        <b-col>{{response.fixtures.played.away}}</b-col>
        <b-col>{{response.fixtures.played.total}}</b-col>
      </b-row>
      <b-row>
        <b-col >Wins </b-col>
        <b-col >{{response.fixtures.wins.home}}</b-col>
        <b-col>{{response.fixtures.wins.away}}</b-col>
        <b-col>{{response.fixtures.wins.total}}</b-col>
      </b-row>
      <b-row>
        <b-col >Draws </b-col>
        <b-col >{{response.fixtures.draws.home}}</b-col>
        <b-col>{{response.fixtures.draws.away}}</b-col>
        <b-col>{{response.fixtures.draws.total}}</b-col>
      </b-row>
      <b-row>
        <b-col>Loses </b-col>
        <b-col>{{response.fixtures.loses.home}}</b-col>
        <b-col>{{response.fixtures.loses.away}}</b-col>
        <b-col>{{response.fixtures.loses.total}}</b-col>
      </b-row>
      <b-row>
        <b-col>Goals For </b-col>
        <b-col>{{response.goals.for.total.home}}</b-col>
        <b-col>{{response.goals.for.total.away}}</b-col>
        <b-col>{{response.goals.for.total.total}}</b-col>
      </b-row>
      <b-row>
        <b-col>Goals Against </b-col>
        <b-col >{{response.goals.against.total.home}}</b-col>
        <b-col>{{response.goals.against.total.away}}</b-col>
        <b-col>{{response.goals.against.total.total}}</b-col>
      </b-row>
    </b-container>
   


  </div>
</template>

<script>
export default {
  name: 'teams-selected',
  props: {
    team: Object
  },

  mounted() {
    
  },
  
  
  data() { 
    return {
    
      response: {
        fixtures: {
          draws: {
            away: 6,
            home: 3,
            total: 9
          },
          loses: {
            away: 0,
            home: 4,
            total: 4
          },
          played: {
            away: 15,
            home: 15,
            total: 30
          },
          wins: {
            away: 9,
            home: 8,
            total: 17
          }
        },
        goals: {
          against: {
            total: {
              away: 13,
              home: 20,
              total: 33
            }
          },
          for: {
            total: {
              away: 27,
              home: 31,
              total: 58
            }
          },

        }
      }
    }
   },
   methods: {

   }


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

}

.team_logo {
  margin: 10px
}

.season {
  color: #38003C;
  
  margin: 10px;

}

.col {
  background-color: #58FF84;
  color: #38003C;
  border: #38003C 1px solid;
}

.container {
  margin: 50px;
}

.headers_row {
  font-weight: 900;
  color: #38003C;
}



</style>