<template>
  <b-container-fluid>
    <b-row class="mt-0">
      <b-col>
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="720"
          img-height="720"
        >
          <b-carousel-slide>
              <template #img>
                  <img class="d-block w-100"
                          width="720"
                          height="720"
                          src="../assets/img/main/main1.jpg"
                  >
              </template>
          </b-carousel-slide>
          <b-carousel-slide>
              <template #img>
                  <img class="d-block w-100"
                       width="720"
                       height="720"
                       src="../assets/img/main/main2.jpg"
                  >
              </template>
          </b-carousel-slide>
          <b-carousel-slide>
              <template #img>
                  <img class="d-block w-100"
                       width="720"
                       height="720"
                       src="../assets/img/main/main3.jpg"
                  >
              </template>
          </b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <b-row>
          <b-col cols="6">
            <AttractionImgCard :attraction="card1"></AttractionImgCard>
          </b-col>
          <b-col cols="3">
            <AttractionImgCard :attraction="card2"></AttractionImgCard>
          </b-col>
          <b-col cols="3">
            <AttractionImgCard :attraction="card3"></AttractionImgCard>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <AttractionImgCard :attraction="card6"></AttractionImgCard>
          </b-col>
          <b-col cols="3">
            <AttractionImgCard :attraction="card4"></AttractionImgCard>
          </b-col>
          <b-col cols="3">
            <AttractionImgCard :attraction="card5"></AttractionImgCard>
          </b-col>
        </b-row>
        <board-list class="board"></board-list>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container-fluid>
</template>

<script>
import AttractionImgCard from "@/components/attraction/item/AttractionImgCard.vue";
import BoardList from "@/components/board/BoardList.vue";
import http from "@/util/http-common";
export default {
  components: {
    AttractionImgCard,
    BoardList,
  },
  data() {
    return {
      card1: {},
      card2: {},
      card3: {},
      card4: {},
      card5: {},
      card6: {},
      // items: [
      //   { type: "자유", title: "게시판1" },
      //   { type: "자유", title: "게시판2" },
      //   { type: "자유", title: "게시판3" },
      //   { type: "자유", title: "게시판4" },
      //   { type: "자유", title: "게시판5" },
      // ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      http.get(`/attraction/preview/125460`).then(({ data }) => {
        this.card1 = data;
      });
      http.get(`/attraction/preview/126323`).then(({ data }) => {
        this.card2 = data;
      });
      http.get(`/attraction/preview/125813`).then(({ data }) => {
        this.card3 = data;
      });
      http.get(`/attraction/preview/125984`).then(({ data }) => {
        this.card4 = data;
      });
      http.get(`/attraction/preview/126123`).then(({ data }) => {
        this.card5 = data;
      });
      http.get(`/attraction/preview/126333`).then(({ data }) => {
        this.card6 = data;
      });
    },
  },
};
</script>

<style scoped>
.card {
  padding: 0px;
  border-radius: 30px;
}
.card-body {
  padding: 0px;
  border-radius: 30px;
}
.card-img {
  padding: 0px;
  border-radius: 30px;
}
.row {
  margin-top: 30px;
}

.board {
  margin-top: 70px;
  margin-bottom: 300px;
}
</style>
