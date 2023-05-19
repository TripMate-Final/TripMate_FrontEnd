<template>
  <div>
    <b-button type="button" class="btn on" onclick="setLike();" title="선택됨">
      <img class="img" src="@/assets/img/redheart.png" />
      <span class="num" id="conLike">{{ like }}</span>
    </b-button>
    <span class="num_view"
      ><img class="img" src="@/assets/img/view.png" /><span class="num" id="conRead">{{
        hit
      }}</span></span
    >
  </div>
</template>

<script>
export default {
  name: "AttractionLikeView",
  props: {
    hit: Number,
    like: Number,
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
.img {
  padding-right: 5px;
  width: 25px;
  height: auto;
}
.btn {
  margin-right: 10px;
  background-color: white;
  color: black;
  border: none;
}
div {
  text-align: left;
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>
