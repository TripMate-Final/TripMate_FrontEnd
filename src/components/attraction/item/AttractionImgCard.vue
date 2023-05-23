<template>
  <div class="card">
    <b-card overlay :img-src="`${attraction.firstImage}`" img-alt="Card Image" text-variant="white">
      <b-card-text class="text">
        <h2>{{ attraction.title }}</h2>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import http from "@/util/http-common";
export default {
  name: "AttractionImgCard",
  props: {
    contentId: Number,
  },
  components: {},
  data() {
    return {
      message: "",
      attraction: {},
    };
  },
  created() {
    console.log(this.contentId);
    http.get(`/attraction/preview/${this.contentId}`).then(({ data }) => {
      this.attraction = data;
      console.log(this.attraction);
    });
  },
  methods: {},
};
</script>

<style></style>
