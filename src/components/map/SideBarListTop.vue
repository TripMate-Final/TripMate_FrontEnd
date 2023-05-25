<template>
    <div class="sidebar-list-top">
        <strong class="top-title">{{ this.$store.state.mapStore.address }}</strong>
        <button class="plan-button" @click="checkUser" v-b-toggle.sidebar-plan>계획짜기</button>
    </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

const userStore = "userStore";

export default {
  name:'SideBarListTop',
  data() {
    return {
    }
  },
    computed:{
        ...mapState(userStore, ["isLogin", "userInfo"]),
        ...mapGetters(["checkUserInfo"]),
    },
  methods:{
      checkUser(){
          console.log("check!!!!")
          if(this.userInfo == null){
              alert("로그인이 필요합니다.")
              this.$router.push({ name: "userlogin" });
          }
      }
  }
}

</script>
<style scoped>
.sidebar-list-top{
  height: 30px;
  margin:5px 10px;
  margin-bottom: 20px;
  display: block;
}
.plan-button{
  float: right;
  height: 35px;
  z-index: 3;
  margin-bottom: 10px;
  padding: 2px 12px;
  background-color:#EFECEC;
  border: 1px solid #0d172a;
  border-radius: 1.5rem;
  color: #0d172a;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
}
.plan-button:hover{
  background-color: #569A64;
  color: #fff;
  border: 0px;
}
.sidebar-list-top .top-title{
    float: left;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: -1.2px;
    line-height: 26px;
    color: #000;
    margin:0px;
}
</style>