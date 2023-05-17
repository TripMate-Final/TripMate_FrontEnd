<template>
  <div class="home">
      <AttractionCard></AttractionCard>
  </div>
</template>

<script>
// @ is an alias to /src
import AttractionCard from '@/components/attraction/AttractionCard.vue'

export default {
  name: 'HomeView',
  components: {
      AttractionCard
  }
}
</script>
