<template>
  <v-app id="app">
    <NavigationDrawer />
    <v-content class="ml-4">
      <router-view/>
    </v-content>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
import NavigationDrawer from './components/NavigationDrawer.vue';

export default {
  components: {
    NavigationDrawer,
  },
  // the rest of your script
};
</script>