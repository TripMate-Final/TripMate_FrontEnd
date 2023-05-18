<template>
  <div>
    <attraction-title></attraction-title>
    <attraction-sido></attraction-sido>
    <attraction-like-view></attraction-like-view>
    <hr style="margin-bottom: 0px" />
    <b-nav tabs class="tabs">
      <b-nav-item class="tab" @click="scrollToImg()">사진보기</b-nav-item>
      <b-nav-item class="tab" @click="scrollToContent()">상세정보</b-nav-item>
      <b-nav-item class="tab" @click="scrollToComment()">댓글</b-nav-item>
      <b-nav-item class="tab" @click="scrollToRecommendation()">추천</b-nav-item>
    </b-nav>
    <div class="img" ref="img"><attraction-img></attraction-img></div>
    <div><h2>상세정보</h2></div>
    <hr />
    <div class="content" ref="content"><attraction-content></attraction-content></div>

    <div>지도지도지도</div>
    <attraction-addr class="addr"></attraction-addr>
    <div>태그넣기</div>
    <attraction-comment></attraction-comment>
    <div ref="comment"><attraction-comment2></attraction-comment2></div>
    <hr />
    <div><h2>제목과 유사한 여행지 추천</h2></div>
    <div ref="recommendation">
      <attraction-recommend
        onclick=""
        v-for="recommend in recommendList"
        :key="recommend"
        :title="recommend"
        remove="false"
      ></attraction-recommend>
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
import AttractionRecommend from "./item/AttractionRecommend.vue";

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
    AttractionRecommend,
  },

  data() {
    return {
      recommendList: [1, 1, 1],
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
</style>
