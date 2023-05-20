<template>
  <div>
    <b-img :src="image" alt="Image" class="img"></b-img>
  </div>
</template>

<script>
export default {
  name: "AttractionImg",
  props: {
    image: String,
    // img: {
    //   type: String,
    //   required: true,
    // },
  },
  components: {},
  data() {
    return {
      message: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
.img {
  width: 70%;
}
</style>
