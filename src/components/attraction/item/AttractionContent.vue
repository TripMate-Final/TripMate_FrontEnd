<template>
  <div>
    {{ overview }}
  </div>
</template>

<script>
export default {
  name: "AttractionContent",
  components: {},
  props: {
    overview: String,
  },
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
