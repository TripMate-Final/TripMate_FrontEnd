<template>
  <div id="attraction-detail-addr">{{ addr }}</div>
</template>

<script>
export default {
  name: "AttractionSido",
  props: {
    addr: String,
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
#attraction-detail-addr{
    font-size: 19px;
}
</style>
