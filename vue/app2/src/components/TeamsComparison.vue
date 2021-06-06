<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <teamsSelected :teamNumber="0" />
        </b-col>
        <b-col>
          <teamsSelected :teamNumber="1"/>
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
  import teamsSelected from './TeamsSelected.vue'

  export default {
    name: 'TeamsComparison',
    components: {
      teamsSelected,
    },
    data(){
      return {
        team1: this.$store.state.teams[0],
        team2: this.$store.state.teams[1],
      }
    }
    


  }
</script>

