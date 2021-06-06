<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <teamsSelected :team='team1'/>
        </b-col>
        <b-col>
          <teamsSelected :team='team2'/>
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
        team1: this.$store.state.team1,
        team2: this.$store.state.team2,
      }
    }
    


  }
</script>