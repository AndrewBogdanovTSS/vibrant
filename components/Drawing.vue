<template>
  <transition name="fade" appear>
    <nuxt-link :to="`/pic/${id}`" class="block border-2 hover:border-red-700 mb-3 mr-3 duration-300">
      <img :src="item.image" alt="image" @load="onImgLoaded" crossorigin="anonymous" />
    </nuxt-link>
  </transition>
</template>

<script>
  export default {
    name: 'Drawing',
    props: {
      id: {
        type: String,
        required: true
      },
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      onImgLoaded(e) {
        console.log('loaded')
      }
    }
  }
</script>
