<template>
  <div class="home">
    <Search/>
    <TeamsSelected/>
    <TeamComparison/>

  </div>
</template>

<script>
// logos de equipos: https://media.api-sports.io/football/teams/{team_id}.png
// statistics: https://api-football-v1.p.rapidapi.com/v3/teams/teams/statistics?season=(año_inicio_temporada)&team=(team_id)&league=(league_id)"
// equipo en particular: https://api-football-v1.p.rapidapi.com/v3/teams?id=(team_id)
// equipos en una liga (una temporada): https://api-football-v1.p.rapidapi.com/v3/teams?league=(league_id)&season=(año_inicio_temporada)
// standings: 




	


// @ is an alias to /src

import TeamsSelected from '../components/TeamsSelected.vue'
import Search from '../components/Search.vue'
export default {
  name: "Home",
  components: {
    TeamsSelected,
    Search
  },
};
</script>
