<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <span>{{ $store.state.team1.name }}</span>
          <img :src="team_1_logo"  alt="">
        </b-col>
        
      </b-row>

      <b-row>
        <b-col class="col">Home</b-col>
        <b-col>Away</b-col>
        <b-col>Total</b-col>
      </b-row>
      <b-row>
        <b-col class="col">{{response.fixtures.played.home}}</b-col>
        <b-col>{{response.fixtures.played.away}}</b-col>
        <b-col>{{response.fixtures.played.total}}</b-col>
      </b-row>
      <b-row>
        <b-col class="col">{{response.fixtures.wins.home}}</b-col>
        <b-col>{{response.fixtures.wins.away}}</b-col>
        <b-col>{{response.fixtures.wins.total}}</b-col>
      </b-row>
      <b-row>
        <b-col class="col">{{response.fixtures.draws.home}}</b-col>
        <b-col>{{response.fixtures.draws.away}}</b-col>
        <b-col>{{response.fixtures.draws.total}}</b-col>
      </b-row>
      <b-row>
        <b-col class="col">{{response.fixtures.loses.home}}</b-col>
        <b-col>{{response.fixtures.loses.away}}</b-col>
        <b-col>{{response.fixtures.loses.total}}</b-col>
      </b-row>
      <b-row>
        <b-col class="col">{{response.goals.for.total.home}}</b-col>
        <b-col>{{response.goals.for.total.away}}</b-col>
        <b-col>{{response.goals.for.total.total}}</b-col>
      </b-row>
      <b-row>
        <b-col class="col">{{response.goals.against.total.home}}</b-col>
        <b-col>{{response.goals.against.total.away}}</b-col>
        <b-col>{{response.goals.against.total.total}}</b-col>
      </b-row>
    </b-container>
   


  </div>
</template>

<script>
export default {

  mounted() {
    
  },
  
  
  data() { 
    return {
      team_1_logo: this.$store.state.team1.logo,
      team_2_logo: this.$store.state.team2.logo,
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
  max-width: 70px;
  max-height: 70px;
}

.col{
  background-color: aquamarine;
  border: black 1px solid;
}

</style>