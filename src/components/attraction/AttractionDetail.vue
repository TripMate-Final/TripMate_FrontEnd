<template>
  <div>
    <attraction-title :title="attraction.title"></attraction-title>
    <attraction-sido :addr="attraction.addr1"></attraction-sido>
    <attraction-like-view
      :hit="attraction.hit"
      :like="attraction.likeCnt"
      :contentId="attraction.contentId"
    ></attraction-like-view>
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

    <div>
      <the-kakao-map :lat="attraction.latitude" :lng="attraction.longitude"></the-kakao-map>
    </div>
    <attraction-addr class="addr"></attraction-addr>
    <div ref="comment"></div>
    <attraction-comment :contentId="attraction.contentId"></attraction-comment>
    <attraction-comment2 :commentsList="commentsList"></attraction-comment2>
    <hr />
    <div ref="recommendation"><h2>제목과 유사한 여행지 추천</h2></div>
    <br/>
    <div class="card-container" style="max-width: 200rem; max-height: 200px">
      <attraction-img-card
        :attraction="item"
        v-for="(item, index) in recommendList"
        :key="index"
      ></attraction-img-card>
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
import { mapState, mapGetters } from "vuex";

const userStore = "userStore";

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
      attraction: {},
      recommendList: [],
      commentsList: {},
      isLike: 0,
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
    if (this.userInfo == null) {
      http.get(`/attraction?contentId=${this.contentId}&userId=`).then(({ data }) => {
        this.attraction = data;
        console.log(this.attraction);
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
      http.get(`/comment/${this.contentId}`).then(({ data }) => {
        this.commentsList = data;
      });
    } else {
      http
        .get(`/attraction?contentId=${this.contentId}&userId=${this.userInfo.userId}`)
        .then(({ data }) => {
          this.attraction = data;
          console.log(this.attraction);
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
      http.get(`/comment/${this.contentId}`).then(({ data }) => {
        this.commentsList = data;
      });
    }
  },

  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
    ...mapGetters(["checkUserInfo"]),
  },
};
</script>

<style scoped lang="scss">
::v-deep{
  .nav-tabs{
    font-size: 18px;
    .nav-link{
      color: #3b3e51;
    }
    .nav-link:hover{
      color: #569A64;
    }
    .active > .nav-link{
      color: #569A64;
    }
  }
}
.tabs {
  display: flex;
  justify-content: center;
  width: 100%;
}

.tab {
  margin-right: 9%;
  margin-left: 9%;
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
  display: flex;
  justify-content: center;
  margin-bottom: 400px;
}
.card {
  flex: 1; /* 가로 공간을 동일하게 분할 */
}
</style>
