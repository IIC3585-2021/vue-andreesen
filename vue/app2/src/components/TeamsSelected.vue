<template>
  <div>
    <h1>
      {{ $store.state.team1.name }} 
      <img :src="team_1_logo"  alt="">
      <img :src="team_2_logo"  alt=""> 
      {{ $store.state.team2.name }}  
    </h1>
   <div>
  <b-list-group horizontal>
    <b-list-group-item>Cras justo odio</b-list-group-item>
    <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
    <b-list-group-item>Morbi leo risus</b-list-group-item>
  </b-list-group>
</div>


  </div>
</template>

<script>
export default {

  mounted() {
    console.log(this.$store.state.team1.logo)
  },
  
  
  data() { 
    return {
      team_1_logo: this.$store.state.team1.logo,
      team_2_logo: this.$store.state.team2.logo
    }
   },
   methods: {

   }


}
</script>

<style scoped>

</style>