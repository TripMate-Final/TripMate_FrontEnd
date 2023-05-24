<template>
  <div>
    <attraction-title :title="attraction.title"></attraction-title>
    <attraction-sido :addr="attraction.addr1"></attraction-sido>
    <attraction-like-view :hit="attraction.hit" :like="attraction.likeCnt"></attraction-like-view>
    <hr style="margin-bottom: 0px" />
    <b-nav tabs class="tabs">
      <b-nav-item class="tab" @click="scrollToImg()">사진보기</b-nav-item>
      <b-nav-item class="tab" @click="scrollToContent()">상세정보</b-nav-item>
      <b-nav-item class="tab" @click="scrollToComment()">댓글</b-nav-item>
      <b-nav-item class="tab" @click="scrollToRecommendation()">추천</b-nav-item>
    </b-nav>
    <div class="img" ref="img">
      <attraction-img :image="attraction.firstImage"></attraction-img>
    </div>
    <div ref="content"><h2>상세정보</h2></div>
    <hr />
    <div class="content">
      <attraction-content :overview="attraction.overview"></attraction-content>
    </div>

    <div><the-kakao-map></the-kakao-map></div>
    <attraction-addr class="addr"></attraction-addr>
    <div><h2 style="text-align: left">톡 댓글!</h2></div>
    <attraction-comment></attraction-comment>
    <div ref="comment"><attraction-comment2></attraction-comment2></div>
    <hr />
    <div><h2>제목과 유사한 여행지 추천</h2></div>

    <div class="card-container">
      <span v-for="(item, index) in recommendList" :key="index" class="card">
        <attraction-img-card :attraction="item" class="img"></attraction-img-card>
      </span>
    </div>
  </div>
</template>

<script>
import AttractionTitle from "@/components/attraction/item/AttractionTitle.vue";
import AttractionContent from "./item/AttractionContent.vue";
import AttractionLikeView from "./item/AttractionLikeView.vue";
import AttractionImg from "./item/AttractionImg.vue";
import AttractionAddr from "./item/AttractionAddr.vue";
import AttractionSido from "./item/AttractionSido.vue";
import AttractionComment from "./item/AttractionComment.vue";
import AttractionComment2 from "./item/AttractionComment2.vue";
import AttractionImgCard from "./item/AttractionImgCard.vue";
import TheKakaoMap from "../map/TheKakaoMap.vue";
import http from "@/util/http-common";

export default {
  components: {
    AttractionTitle,
    AttractionAddr,
    AttractionContent,
    AttractionLikeView,
    AttractionImg,
    AttractionSido,
    AttractionComment,
    AttractionComment2,
    AttractionImgCard,
    TheKakaoMap,
  },

  data() {
    return {
      contentId: 0,
      attraction: {
        firstImage: "@/assets/img/noimg.png",
      },
      recommendList: [],
    };
  },

  methods: {
    scrollToImg() {
      this.$refs.img.scrollIntoView({ behavior: "smooth" });
    },
    scrollToContent() {
      this.$refs.content.scrollIntoView({ behavior: "smooth" });
    },
    scrollToComment() {
      this.$refs.comment.scrollIntoView({ behavior: "smooth" });
    },
    scrollToRecommendation() {
      this.$refs.recommendation.scrollIntoView({ behavior: "smooth" });
    },
  },

  created() {
    window.scrollTo(0, 0);
    this.contentId = this.$route.params.contentId;
    // console.log(this.contentId);
    http.get(`/attraction/${this.contentId}`).then(({ data }) => {
      this.attraction = data;
      http.get(`/attraction/preview/${this.attraction.recommendId1}`).then(({ data }) => {
        this.recommendList.push(data);
      });
      http.get(`/attraction/preview/${this.attraction.recommendId2}`).then(({ data }) => {
        this.recommendList.push(data);
      });
      http.get(`/attraction/preview/${this.attraction.recommendId3}`).then(({ data }) => {
        this.recommendList.push(data);
      });
    });
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  width: 100%;
}

.tab {
  margin-right: 8%;
  margin-left: 8%;
}
.img {
  margin-top: 30px;
}
.content {
  margin-bottom: 50px;
}

.addr {
  margin-bottom: 20px;
}

h2 {
  margin-top: 20px;
}
.card-container {
  display: flex; /* 요소들을 가로로 정렬하는 Flexbox 레이아웃 사용 */
}

.card {
  flex: 1; /* 가로 공간을 동일하게 분할 */
}
</style>
