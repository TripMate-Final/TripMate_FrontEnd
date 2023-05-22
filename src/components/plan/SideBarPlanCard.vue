<template>
  <div>
      <b-card header-tag="header">
        <template #header>
          <h6 class="mb-0">{{title}}</h6>
        </template>
        <b-card-text>{{content}}</b-card-text>
      </b-card>
  </div>

</template>

<script>
export default {
  name: "SideBarPlanTop",
  props: {
    title: String,
    content: String,
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