import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    team1: {
      id: 33,
      league: 39,
      season: 2020,
      name: 'Machester United',
      logo: "https://media.api-sports.io/football/teams/33.png"
    },
    team2: {
      id: 36,
      league: 33,
      season: 2018,
      name: 'Fulham',
      logo: "https://media.api-sports.io/football/teams/36.png"
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
