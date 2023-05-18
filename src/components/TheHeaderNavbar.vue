<template>
  <div>
    <b-container class="bv-example-row text-center">
      <b-navbar toggleable >
        <b-col cols="2">
          <b-navbar-brand href="#" >
            <img src="../assets/img/navbar/logo.png"/>
          </b-navbar-brand>
        </b-col>
        <b-col cols="9">
          <b-form class="d-flex">
            <b-form-input placeholder="Search" ></b-form-input>
            <b-button id="submitBtn" type="submit">Search</b-button>
          </b-form>
        </b-col>
        <b-col cols="1">
          <b-navbar-brand id="mapicon" href="#" >
            <img src="../assets/img/navbar/mapicon.png"/>
          </b-navbar-brand>
        </b-col>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
  export default {
      name: "TheHeaderNavbar",
  };
</script>

<style scoped>
img{
  height:50px;
  padding:0px;
}
#mapicon{
  margin-bottom: 10px;
}
#submitBtn{
  background-color: #62B273;
  opacity: 0.8;
  ;
}
</style>