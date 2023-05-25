<template>
  <div class="nav-container">
    <b-nav fill pills v-model="selectedNavItem" card-header tabs>
      <b-nav-item
        v-for="navItem in navItems"
        :key="navItem.id"
        :class="{
          active: navItem.id === selectedNavItem,
          inactive: navItem.id !== selectedNavItem,
        }"
        @click="selectNavItem(navItem.id)"
      >
        {{ navItem.title }}</b-nav-item
      >
      <div class="ml-auto">
        <b-dropdown id="dropdown-offset" offset="0" text="정렬" class="m-2">
          <b-dropdown-item href="#">좋아요순</b-dropdown-item>
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
  props: {
    keyword: String,
  },
  data() {
    return {
      selectedNavItem: 10,
      navItems: [
        { id: 10, title: "전체" },
        { id: 12, title: "관광지" },
        { id: 14, title: "문화시설" },
        { id: 15, title: "축제공연행사" },
        { id: 25, title: "여행코스" },
        { id: 28, title: "레포츠" },
        { id: 32, title: "숙박" },
        { id: 38, title: "쇼핑" },
        { id: 39, title: "음식점" },
      ],
    };
  },
  methods: {
    selectNavItem(navItemId) {
      this.selectedNavItem = navItemId;
      this.$router.push({
        name: "attractionlist",
        query: { keyword: this.keyword, categoryCode: this.selectedNavItem },
      });
      window.location.reload();
    },
  },
  computed: {
    activeCard() {
      return this.cards[this.selectedNavItem];
    },
  },
};
</script>

<style scoped>
.nav-container {
  margin-top: 10px; /* 원하는 마진 값을 설정하세요 */
}

.active > a {
  color: #070707;
}
.inactive > a:hover {
  color: #2d352e;
}
</style>
