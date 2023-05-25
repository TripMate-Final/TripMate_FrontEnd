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
@font-face {
    font-family: 'TheJamsil5Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
}

#app {
  font-family:'TheJamsil5Bold';
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
