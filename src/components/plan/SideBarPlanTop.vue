<template>
  <div>
    <b-card id="plan-top" no-body>
      <b-card-header header-tag="nav">
        <b-nav v-model="selectedNavItem" card-header tabs>
          <b-nav-item v-for="navItem in navItems" :key="navItem.id" :class="{'active': navItem.id === selectedNavItem, 'inactive': navItem.id !== selectedNavItem}" @click="selectNavItem(navItem.id)">
            {{navItem.title}}</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card :title="activeCard.title" :sub-title="activeCard.subTitle">
        {{ activeCard.content }}
      </b-card>
    </b-card>
  </div>

</template>

<script>
export default {
  name: "SideBarPlanTop",
  data() {
    return {
      selectedNavItem: 'card0',
      navItems: [
        {id: 'card0', title: '여행요약'},
        {id: 'card1', title: '1일차'},
        {id: 'card2', title: '2일차'},
        {id: 'card3', title: '3일차'}
      ],
      cards: {
        card0: {
          title: '여행요약',
          subTitle: '여행요약입니다',
          content: '내용입니다'
        },
        card1: {
          title: 'Card 1',
          subTitle: 'Subtitle for Card 1',
          content: 'Content for Card 1'
        },
        card2: {
          title: 'Card 2',
          subTitle: 'Subtitle for Card 2',
          content: 'Content for Card 2'
        },
        card3: {
          title: 'Card 3',
          subTitle: 'Subtitle for Card 3',
          content: 'Content for Card 3'
        }
      }
    }
  },
  methods: {
    selectNavItem(navItemId) {
      this.selectedNavItem = navItemId;
    }
  },
  computed: {
    activeCard() {
      return this.cards[this.selectedNavItem];
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep {
  .active > a{
    color: #569A64;
  }
  .inactive > a:hover{
    color: #569A64;
  }
}
</style>