<template>
  <v-navigation-drawer
      v-model="showDrawer"
      app
  >
    <v-list dense>
      <v-list-item
          v-for="(source, i) in sources"
          :key="i"
          @click="fetchNews(source.id)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ source.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    showDrawer: true,
  }),
  computed: {
    sources() {
      return this.$store.getters.getSources;
    },
  },
  methods: {
    fetchNews(sourceId) {
      this.$store.dispatch('fetchNewsBySource', sourceId);
    },
  },
  created() {
    this.$store.dispatch('sources');
  },
  watch: {
    $route(to) {
      this.$nextTick(() => {
        this.showDrawer = to.name !== 'detail';
      });
    }
  }
};
</script>