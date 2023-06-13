<template>
  <div>
    <b-row class="text-center">
      <b-col></b-col>
      <b-col cols="8">
        <router-view></router-view>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ComponetLayout",
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

<style scoped></style>
