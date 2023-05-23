<template>
  <div>
      <b-card header-tag="header">
        <template #header>
          <h6 class="mb-0">{{data.title}}</h6>
        </template>
        <b-card-text>{{data.content}}</b-card-text>
      </b-card>
  </div>

</template>

<script>
export default {
  name: "SideBarPlanTop",
  props: {
    data:{
      type:Object
    }
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped lang="scss">

</style>