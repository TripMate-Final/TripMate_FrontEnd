<template>
  <div>
    <b-tag id="cat-tag" v-for="tag in tags" :key="tag" no-remove pill>{{ tag }} </b-tag>
  </div>
</template>

<script>
export default {
  name: "AttractionTag",
  props: {
    gugunName: String,
    categoryName: String,
    cat3Name: String,
  },

  data() {
    return {
      tags: [this.gugunName, this.categoryName, this.cat3Name],
    };
  },
};
</script>

<style scoped lang="scss">
::v-deep{
  #cat-tag{
    font-size: 16px;
    letter-spacing: 2px;
    background-color: #EFECEC;
    color: #070707;
  }
}
</style>
