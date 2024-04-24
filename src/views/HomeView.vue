<template>
  <div class="home">
    <h1 class="text-2xl m-4 text-center font-bold">Berita Terkini</h1>
    <div class="grid grid-cols-1 md:grid-cols-1 gap-4 p-4 md:w-full lg:grid-cols-2 lg:px-16">
      <NewsCard v-for="news in listNews" :key="news.title"
                :title="news.title" :description="news.description"
                :author="news.author" :imageUrl="news.urlToImage"
                @on-click="moveToDetail(news)"/>
    </div>
  </div>
</template>

<script>

import NewsCard from '@/components/Card.vue'

export default {
  name: 'HomeView',
  components: {
    NewsCard
  },
  computed:{
    listNews(){
      return this.$store.state.newsData
    }
  },
  methods:{
    getNews(){
      this.$store.dispatch('fetchNewsData')
    },
    moveToDetail(news){
      this.$store.dispatch('selectNews', news);
      this.$router.push(`/${news.title}`)
    },
  },
  mounted() {
    this.getNews()
  }
}
</script>
