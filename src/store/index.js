import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newsData: null,
    selectedNews: null,
    sources: null,
  },
  getters: {
    getNewsData: state => state.newsData,
    getSources: state => state.sources,
  },
  mutations: {
    setNewsData: (state, newsData) => {
      state.newsData = newsData;
    },
    sources: (state, sources) => {
      state.sources = sources;
    },
    setSelectedNews: (state, news) => { // mutation baru
      state.selectedNews = news;
    },
  },
  actions: {
    fetchNewsData: async ({ commit }) => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=96e9490168db428b869109f2c6acb366');
        commit('setNewsData', response.data.articles);
      } catch (error) {
        console.error(error);
      }
    },
    sources: async ({ commit }) => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines/sources?apiKey=96e9490168db428b869109f2c6acb366');
        commit('sources', response.data.sources);
      } catch (error) {
        console.error(error);
      }
    },
    fetchNewsBySource: async ({ commit }, sourceId) => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=96e9490168db428b869109f2c6acb366`);
        commit('setNewsData', response.data.articles);
      } catch (error) {
        console.error(error);
      }
    },
    selectNews: ({ commit, state }, news) => {
      news.id = state.selectedNews ? state.selectedNews.length + 1 : 1;
      commit('setSelectedNews', news);
    },
  },
  modules: {
  }
})