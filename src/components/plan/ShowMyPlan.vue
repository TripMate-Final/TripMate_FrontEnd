<template>
  <div class="myplan">{{ data }}</div>
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
