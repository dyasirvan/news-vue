<template>
  <div class="home">
    <h1>Berita Terkini</h1>
    <div v-if="isLoading">
      <v-sheet
          color="grey"
          class="pa-3"
      >
        <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
        ></v-skeleton-loader>
      </v-sheet>
    </div>
    <v-layout row wrap v-else>
      <v-flex xs12 sm6 md4 lg3 v-for="news in listNews" :key="news.title">
        <MyCard :title="news.title" :description="news.description"
                :author="news.author" :imageUrl="news.urlToImage"
                @on-click="moveToDetail(news)"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

import MyCard from "@/components/MyCard.vue";

export default {
  name: 'HomeView',
  components: {
    MyCard,
  },
  data() {
    return {
      isLoading: true
    }
  },
  computed:{
    listNews(){
      return this.$store.state.newsData
    }
  },
  methods:{
    async getNews(){
      try {
        this.isLoading = true;
        await this.$store.dispatch('fetchNewsData');
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
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
