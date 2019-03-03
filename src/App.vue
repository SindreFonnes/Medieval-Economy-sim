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
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "app",
  data(){
    return{
      activeitems:0
    }
  },
  methods: {
    activeitem: function(item) {
      this.activeitems = item;
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