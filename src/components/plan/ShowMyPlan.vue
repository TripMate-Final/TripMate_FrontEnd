<template>
  <div class="myplan">
    <router-link :to="`../plan/detail/${data.planId} `"
      >여행 제목 :: {{ data.planTitle }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "ShowMyPlan",
  props: {
    data: {},
  },

  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.myplan {
  margin-top: 20px;
}
</style>
