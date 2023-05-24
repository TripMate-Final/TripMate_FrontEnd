<template>
  <div>
    <b-card id="plan-top" no-body>
      <b-card-header header-tag="nav">
        <b-nav v-model="selectedNavItem" card-header tabs>
          <b-nav-item v-for="navItem in navItems" :key="navItem.id" :class="{'active': navItem.id === selectedNavItem, 'inactive': navItem.id !== selectedNavItem}" @click="selectNavItem(navItem.id)">
            {{navItem.title}}</b-nav-item>
        </b-nav>
      </b-card-header>
      <b-card v-if="selectedNavItem == 0">
        <b-input-group prepend="제목" class="mt-3">
          <b-form-input :value="planTitle" disabled></b-form-input>
        </b-input-group>
      </b-card>
      <b-card v-if="selectedNavItem != 0" :title="activeCard.title" :sub-title="activeCard.subTitle">
        {{ activeCard.content }}
      </b-card>
    </b-card>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "ShowPlanTop",
  data() {
    return {
      selectedNavItem: 0,
      navItems: [
        {id: 0, title: '여행요약'},
        {id: 1, title: '1일차'},
        {id: 2, title: '2일차'},
        {id: 3, title: '3일차'},
      ],
      cards: {
        0: {
          title: '여행요약',
          subTitle: '여행요약입니다',
          content: '내용입니다'
        },
        1: {
          title: 'Card 1',
          subTitle: 'Subtitle for Card 1',
          content: 'Content for Card 1'
        },
        2: {
          title: 'Card 2',
          subTitle: 'Subtitle for Card 2',
          content: 'Content for Card 2'
        },
        3: {
          title: 'Card 3',
          subTitle: 'Subtitle for Card 3',
          content: 'Content for Card 3'
        },
      }
    }
  },
  props:{
    planTitle: String
  },
  computed: {
    activeCard() {
      return this.cards[this.selectedNavItem];
    },
  },
  methods:{
    ...mapActions(['mapStore/setSelectedDay']),
    selectNavItem(navItemId) {
      this.selectedNavItem = navItemId;
      this["mapStore/setSelectedDay"](navItemId);
    },
  }
}
</script>

<style scoped lang="scss">
::v-deep {
  a{
    color: #2c3e50;
  }
  .active > a{
    color: #569A64;
  }
  .inactive > a:hover{
    color: #569A64;
  }
}

.save-title-button{
  float: right;
  z-index: 3;
  background-color:#EFECEC;
  color: #0d172a;
  font-family: "NanumSquareOTF","RocGrotesk-Wide";
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
}
.save-title-button:hover{
  background-color: #569A64;
  color: #fff;
  border: 0px;
}
.save-title-button.active{
  background-color: #569A64;
  color: #fff;
  border: 0px;
}

</style>