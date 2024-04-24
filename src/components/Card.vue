<template>
  <div class="w-full md:w-full lg:max-w-full lg:flex" @click="handleClick">
    <div class="h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden items-center justify-center">
      <img :src="imageUrl" alt="gambar berita" class="object-cover">
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-4">
        <div class="text-gray-900 font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">{{ description }}</p>
      </div>
      <div class="flex items-center">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">{{ author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
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