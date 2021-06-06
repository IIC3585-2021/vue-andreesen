<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col>
         <span>{{ $store.state.team1.name }}</span>
         <img :src="team_1_logo"  alt="">
        </b-col>

        <b-col>

         <span>{{ $store.state.team2.name }}</span>
         <img :src="team_2_logo"  alt="">
        </b-col>
        
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
      team_2_logo: this.$store.state.team2.logo
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

</style>