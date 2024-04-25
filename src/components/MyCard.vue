<template>
  <v-card
      class="mx-auto pa-3 ma-3"
      max-width="400"
      elevation="2"
  >
    <v-img
        class="white--text align-end"
        height="200px"
        :src="imageUrl"
    >
    </v-img>

    <v-card-subtitle class="pb-0">
      {{ title }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ description }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
          color="orange"
          text
          @click="handleClick"
      >
        Read More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MyCard',
  props: {
    title: String,
    description: String,
    author: String,
    imageUrl: String
  },
  methods: {
    handleClick() {
      this.$emit("on-click");
    }
  }
}
</script>