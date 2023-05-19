<template>
  <b-container-fluid>
    <b-row class="mt-0">
      <b-col>
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="300"
        >
          <b-carousel-slide
              img-src="https://picsum.photos/1024/300/?image=10"
          ></b-carousel-slide>
          <b-carousel-slide
              img-src="https://picsum.photos/1024/300/?image=12"
          ></b-carousel-slide>
          <b-carousel-slide
              img-src="https://picsum.photos/1024/300/?image=22"
          ></b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <b-row>
          <b-col cols="6">
            <b-card img-src="https://placekitten.com/g/400/450" img-height="400"></b-card>
          </b-col>
          <b-col cols="3">
            <b-card img-src="https://placekitten.com/g/400/450" img-height="400"></b-card>
          </b-col>
          <b-col cols="3">
            <b-card img-src="https://placekitten.com/g/400/450" img-height="400"></b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6" style="background-color:darkgrey">
              <p>인기게시판</p>
              <b-table :items="items" thead-class="d-none">
              </b-table>
          </b-col>
          <b-col cols="3">
            <b-card img-src="https://placekitten.com/g/400/450" img-height="400"></b-card>
          </b-col>
          <b-col cols="3">
            <b-card img-src="https://placekitten.com/g/400/450" img-height="400"></b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container-fluid>
</template>

<script>
  export default {
      data(){
          return {
              items:[
                  {type:'자유', title:'게시판1'},
                  {type:'자유', title:'게시판2'},
                  {type:'자유', title:'게시판3'},
                  {type:'자유', title:'게시판4'},
                  {type:'자유', title:'게시판5'},
              ]
          }
      }
  }
</script>

<style scoped>
.card{
  padding: 0px;
  border-radius: 30px;
}
.card-body{
  padding: 0px;
  border-radius: 30px;
}
.card-img{
  padding: 0px;
  border-radius: 30px;
}
.row{
  margin-top:30px;
}

</style>