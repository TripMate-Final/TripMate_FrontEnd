<template>
    <div>
        <b-navbar b-row variant="light">
            <b-col>
                <b-navbar-brand href="#">
                    <img src="../assets/img/navbar/logo.png" style="float:right">
                </b-navbar-brand>
            </b-col>
            <b-col cols="8">
                <b-form-input placeholder="검색어를 입력하세요"></b-form-input>
            </b-col>
           <b-col>
               <b-navbar-brand>
                   <img src="../assets/img/navbar/map.png" style="height:50px; float:left">
               </b-navbar-brand>
           </b-col>
        </b-navbar>
    </div>
</template>

<script>
  export default {
      name: "TheHeaderNavbar",
  };
</script>

<style scoped>
.navbar-brand img {
    height: 70px;
}
.form-control{
    background-color: #62B273;
    opacity: 0.3;
}
</style>