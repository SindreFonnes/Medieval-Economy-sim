<template>
  <div id="app">
    <nav>
      <!--TODO fiks click area for web navigation -->
      <div class="ui secondary pointing menu">
        <router-link to="/">
        <a class="item" v-bind:class="{'active' : this.activeitems==0}" v-on:click="activeitem(0)">
          Home
        </a>
        </router-link>
        <router-link to="/tmp">
        <a class="item" v-bind:class="{'active' : this.activeitems==1}" v-on:click="activeitem(1)">
          Tmp Solution
        </a>
        </router-link>
        <router-link to="/generaloverview">
        <a class="item" v-bind:class="{'active' : this.activeitems==2}" v-on:click="activeitem(2)">
          General Overview
        </a>
        </router-link>
        <router-link to="/citiesanddivisions">
        <a class="item" v-bind:class="{'active' : this.activeitems==3}" v-on:click="activeitem(3)">
          Cities and Divisions
        </a>
        </router-link>
        <router-link to="/tasks">
        <a class="item" v-bind:class="{'active' : this.activeitems==4}" v-on:click="activeitem(4)">
          Tasks
        </a>
        </router-link>
        <router-link to="/professions">
        <a class="item" v-bind:class="{'active' : this.activeitems==5}" v-on:click="activeitem(5)">
          Profession
        </a>
        </router-link>
        <router-link to="/citizens">
        <a class="item" v-bind:class="{'active' : this.activeitems==6}" v-on:click="activeitem(6)">
          Citizens
        </a>
        </router-link>
        <router-link to="/resources">
        <a class="item" v-bind:class="{'active' : this.activeitems==7}" v-on:click="activeitem(7)">
          Resources
        </a>
        </router-link>
        <router-link to="/wares">
        <a class="item" v-bind:class="{'active' : this.activeitems==8}" v-on:click="activeitem(8)">
          Wares
        </a>
        </router-link>
        <router-link to="/structuredesigns">
        <a class="item" v-bind:class="{'active' : this.activeitems==9}" v-on:click="activeitem(9)">
          Structure Designs
        </a>
        </router-link>
        
        <router-link to="/structures">
        <a class="item" v-bind:class="{'active' : this.activeitems==11}" v-on:click="activeitem(11)">
          Structures
        </a>
        </router-link>
        <router-link to="/complexes">
        <a class="item" v-bind:class="{'active' : this.activeitems==10}" v-on:click="activeitem(10)">
          Complexes
        </a>
        </router-link>
      </div>
    </nav>
    <router-view :key="routerkey"/>
  </div>
</template>

<script>

export default {
  name: "app",
  data(){
    return{
      activeitems:0,
      //to force an update
      routerkey:0
    }
  },
  methods: {
    activeitem: function(item) {
      this.activeitems = item;
    },
    rerender: function(){
      this.routerkey = this.routerkey+1;
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


nav {
  padding: 20px;
}
</style>