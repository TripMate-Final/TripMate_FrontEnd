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
              <b-form-input  v-model="inputTitle" :disabled="isChecked === 1"></b-form-input>
              <b-input-group-append>
                  <button class="save-title-button" :class="{'active': isChecked === 1, 'inactive': isChecked === 0}" @click="saveTitle"> {{ buttonText }}</button>
              </b-input-group-append>
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
  name: "SideBarPlanTop",
  data() {
    return {
      inputTitle :'',
      selectedNavItem: 0,
      isChecked: 0,
      buttonText: '저장',
      navItems: [
        {id: 0, title: '여행요약'},
        {id: 1, title: '1일차'},
        {id: 2, title: '2일차'},
        {id: 3, title: '3일차'},
      ],
      cards: {
        0: {
          title: '',
          subTitle: '',
          content: ''
        },
        1: {
          title: '',
          subTitle: '',
          content: ''
        },
        2: {
          title: '',
          subTitle: '',
          content: ''
        },
        3: {
          title: '',
          subTitle: '',
          content: ''
        },
      }
    }
  },
    computed: {
        activeCard() {
            return this.cards[this.selectedNavItem];
        },
    },
  methods: {
    ...mapActions(['mapStore/setPlanTitle','mapStore/addPlan','mapStore/setSelectedDay']),
    selectNavItem(navItemId) {
      this.selectedNavItem = navItemId;
      console.log(navItemId);
      this["mapStore/setSelectedDay"](navItemId);
    },
      saveTitle() {
        if(this.isChecked === 0){
            this.isChecked = 1;
            this.buttonText = '수정';
            this['mapStore/setPlanTitle'](this.inputTitle);
        }else{
            this.isChecked = 0;
            this.buttonText = '저장';
        }
      }
  },

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