<template>
  <div>
    <b-row>
      <b-col>
        <b-alert show><h3 class="board-title">글목록</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-button id="write-btn" @click="moveWrite()">글쓰기</b-button>
      </b-col>
    </b-row>
    <b-form-group
      label-align-sm="right"
      label-size="sm"
      class="my-3"
    >
      <b-input-group size="sm">
        <b-form-input
          id="filter-input"
          v-model="filter"
          type="search"
          placeholder="검색어를 입력하세요"
        ></b-form-input>

        <b-input-group-append>
          <b-button :disabled="!filter" @click="filter = ''">지우기</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
      @row-clicked="handleRowClick"
    >
      >
      <template #cell(name)="row"> {{ row.value.first }} {{ row.value.last }} </template>
      <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? "Hide" : "Show" }} Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul @click="viewDetail">
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
    <b-col class="my-1">
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="center"
        size="sm"
        class="my-0"
      ></b-pagination>
    </b-col>
  </div>
</template>
<script>
import http from "@/util/http-common";
export default {
  name: "BoardList",
  components: {},
  data() {
    return {
      items: [],
      fields: [
        { key: "boardId", label: "글번호", tdClass: "tdClass" },
        { key: "boardTitle", label: "제목", tdClass: "tdSubject" },
        { key: "userName", label: "작성자", tdClass: "tdClass" },
        { key: "hit", label: "조회수", tdClass: "tdClass" },
        { key: "boardDate", label: "작성일", tdClass: "tdClass" },
      ],
      message: "",
      totalRows: 2,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
      userInfo: {},
    };
  },
  created() {
    http.get(`/board/list`).then(({ data }) => {
      this.items = data;
      // console.log(this.items);
      this.totalRows = this.items.length;
      console.log(this.totalRows);
    });
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    // console.log(this.items);
    // this.totalRows = this.items.length;
    // console.log(this.totalRows);
  },

  methods: {
    moveWrite() {
      this.$router.push({ name: "boardwrite" });
    },
    handleRowClick(item) {
      console.log(item);
      // this.$router.push({
      //   name: "boardDetail",
      //   params: { boardId: item.boardId },
      // });
      this.$router.push(`detail/${item.boardId}`);
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep{
  .form-group{
    width: 300px;
    float: right;
  }
  .alert-info{
    background-color: #efececb5;
    border: white;
    color: #2c3e50;
    width: 700px;
    margin:auto;
  }
  #write-btn{
    background-color: #EFECEC;
    border-color: #0d172a;
    color:#0d172a;
  }
  #write-btn:hover{
    background-color: #569a64ad;
    border-color:#ffffff;
    color: white;
  }
  .page-item.disabled .page-link{
    background-color: #EFECEC;
    border-color:#0d172a;
    color: #0d172a;
  }
  .page-item.active .page-link{
    background-color:  #0d172a;
    border-color:#0d172a;
    color: #EFECEC;
  }
  .page-item .page-link{
    background-color: #EFECEC;
    border-color:#0d172a;
    color: #0d172a;
  }
}
.tdClass {
  width: 50px;
  text-align: center;
}
.tdSubject {
  width: 300px;
  text-align: left;
}
</style>
