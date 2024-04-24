<template>
  <div class="detail flex flex-col items-center justify-center space-y-4 px-12">
    <img :src="news.urlToImage" alt="gambar berita" class="object-cover h-64 w-full rounded-lg shadow-md">
    <h1 class="text-3xl font-bold">{{ news.title }}</h1>
    <p class="text-sm text-gray-500">{{ news.publishedAt }}</p>
    <p class="text-lg font-semibold">{{ news.author }}</p>
    <p class="text-base text-gray-700">{{ news.content ?? news.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  computed:{
    news(){
      return this.$store.state.newsData.filter(news => news.title === this.$route.params.title)[0]
    }
  },
  methods:{
    getNews(){
      this.$store.dispatch('fetchNewsData')
      console.log(this.$route.params.title)
      console.log(this.$store.state.newsData.filter(news => news.title === this.$route.params.title)[0])
    },
  },
  mounted() {
    this.getNews()
  }
}
</script>
