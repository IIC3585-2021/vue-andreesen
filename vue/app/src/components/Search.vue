<template>
  <div v-on:click="exitFunction">
      <div style="width=50%">
          <span>Season: </span>
          <input v-model="season" />
      </div>
    
    <span> Team: </span>
    <div class="dropdown">
      <button v-on:click="myFunction" class="dropbtn">Dropdown</button>
      <div id="myDropdown" class="dropdown-content" v-bind:class="{ show: isActive }">
        <input
          type="text"
          placeholder="Search.."
          id="myInput"
          onkeyup="filterFunction()"
        />
        <a href="#about">About</a>
        <a href="#base">Base</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <a href="#custom">Custom</a>
        <a href="#support">Support</a>
        <a href="#tools">Tools</a>
      </div>
    </div>
    <img
      src="https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      season: "",
      team: "",
      isActive: false,
      usingButton: true,
    };
  },
  methods: {
      myFunction: function(){
          if (this.isActive){
              this.isActive = false
          } else {
              this.isActive = true
          }
      },
      exitFunction: function(){
          console.log("clicking outside")
          if (this.isActive){
              this.isActive = false
          }
      }
  },
};
</script>

<style>
/* Dropdown Button */
.dropbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover,
.dropbtn:focus {
  background-color: #3e8e41;
}

/* The search field */
#myInput {
  box-sizing: border-box;
  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 14px 20px 12px 45px;
  border: none;
  border-bottom: 1px solid #ddd;
}

/* The search field when it gets focus/clicked on */
#myInput:focus {
  outline: 3px solid #ddd;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f6f6f6;
  min-width: 230px;
  border: 1px solid #ddd;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {
  display: block;
}
</style>