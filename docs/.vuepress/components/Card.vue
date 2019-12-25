<template>
  <div class="lg:max-w-sm rounded overflow-hidden shadow-lg px-4 py-2 m-2 object-center">
    <img v-bind:src="img" class="w-full">
    <div class="px-6 py-4">
      <a class="font-bold text-xl mb-2 hover:bg-teal-600 linkAnimation" :href="link" v-html="title" target="_blank"></a>
      <p class="text-gray-700 text-base" v-html="mainText"></p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" v-for="tag in tags">{{tag}}</span>
    </div>
  </div>
</template>
<style>
  .linkAnimation{
    transition: 0.2s;
  }
</style>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    mainText: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: false
    },
    img: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: false
    }
  }
}
</script>

