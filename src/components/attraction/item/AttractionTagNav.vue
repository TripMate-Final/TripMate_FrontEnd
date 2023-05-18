<template>
  <div class="nav-container">
    <b-nav tabs>
      <b-nav-item active>전체</b-nav-item>
      <b-nav-item>관광지</b-nav-item>
      <b-nav-item>음식점</b-nav-item>
      <b-nav-item disabled>?????</b-nav-item>
      <div class="ml-auto">
        <b-dropdown id="dropdown-offset" offset="0" text="정렬" class="m-2">
          <b-dropdown-item href="#">인기순</b-dropdown-item>
          <div class="dropdown-divider"></div>
          <b-dropdown-item href="#">조회수순</b-dropdown-item>
        </b-dropdown>
      </div>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "AttractionTagNav",
};
</script>

<style scoped>
.nav-container {
  margin-top: 10px; /* 원하는 마진 값을 설정하세요 */
}
</style>
