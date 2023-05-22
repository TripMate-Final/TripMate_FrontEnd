<template>
  <div>
    <b-card no-body class="overflow-hidden">
      <b-row>
        <b-col md="4">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>

        <b-col md="8">
          <b-card-body>
              <a v-b-toggle href="#sidebar-detail" @click="openDetail(125266)" @click.prevent>title</a>
            <b-card-text >
             내용입니다.
            </b-card-text>
            <AttractionTag></AttractionTag>
          </b-card-body>
          <div class="heart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              width="24"
              height="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.45 2 12.12 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.62-3.4 6.95-8.55 11.53L12 21.35z"
              />
            </svg>
          </div>
          <div class="heart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-heart"
              width="23"
              height="23"
            >
              <path
                d="M20.84 4.58a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.09a5.5 5.5 0 0 0-7.78 7.78l1.06 1.09L12 21.01l7.78-7.77 1.06-1.09a5.5 5.5 0 0 0 0-7.77z"
              />
            </svg>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import AttractionTag from "@/components/attraction/item/AttractionTag.vue";
import {mapActions} from "vuex";
export default {
  name: "AttractionCard",
  components: {
    AttractionTag,
  },
  datas:{

  },
  methods:{
      ...mapActions(['fetchDetailData']),

    openDetail(contentId){
        this.fetchDetailData(contentId);
    }

  }
};
</script>

<style scoped>
.b-card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.heart-icon {
  position: absolute;
  bottom: 0;
  right: 10px;
  margin: 10px;
  margin-left: 10px;
}
</style>
