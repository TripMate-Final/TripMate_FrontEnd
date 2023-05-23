<template>
  <div id="app">
      <the-header-navbar></the-header-navbar>
      <router-view></router-view>
  </div>
</template>

<script>
  import TheHeaderNavbar from "@/components/TheHeaderNavbar.vue";
  export default {
      components:{
          TheHeaderNavbar,
      }
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
}

</style>
