<template>
  <v-container class="detail">
    <v-btn color="primary" @click="back">Kembali</v-btn>
    <v-img :src="news.urlToImage" aspect-ratio="2.75" class="my-4"></v-img>
    <v-card class="pa-4">
      <v-card-title class="headline">{{ news.title }}</v-card-title>
      <v-card-subtitle class="subtitle-1">{{ news.publishedAt }}</v-card-subtitle>
      <v-card-text class="body-1">{{ news.author }}</v-card-text>
      <v-card-text>{{ news.content ?? news.description }}</v-card-text>
    </v-card>
  </v-container>
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
    },
    back(){
      this.$router.push('/')
    }
  },
  mounted() {
    this.getNews()
  }
}
</script>

<style scoped>
.detail {
  max-width: 800px;
  margin: auto;
}
</style>