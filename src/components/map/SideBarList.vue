<template>
  <div class="side-bar-wrapper">
      <div class="side-bar">
          <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
          <b-sidebar id="sidebar-1" title="Sidebar" shadow>
              <div class="px-3 py-2 sidebar-text">
                  <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
              </div>
          </b-sidebar>
      </div>
  </div>
</template>
<script>
export default {
    name:'SideBarList',
    data(){
        return {

        }
    },
    methods:{

    }
}

</script>
<style lang="scss" scoped>

::v-deep{
    .b-sidebar{
        background-color: #62B273 !important;
        height: 100%;
    }
}
</style>