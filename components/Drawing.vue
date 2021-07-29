<template>
  <transition name="fade" appear>
    <div class="relative block mb-3 group hover:cursor-pointer">
      <div
        class="
          absolute
          w-full
          bg-black-100
          flex flex-col
          justify-end
          bg-dark-800/50
          bottom-0
          p-3
          opacity-0
          group-hover:opacity-100
          duration-300
          border-t border-light-100/25
          backdrop-filter backdrop-blur-sm
        "
      >
        <div
          class="w-24 h-24 rounded-full self-center border border-light-100/25 flex items-center justify-center"
          :style="`background: rgb(${color})`"
        >
          <span class="text-white">{{ item.colorName }}</span>
        </div>
        <p class="text-white mt-3 text-center">{{ item.title }}</p>
      </div>
      <img :src="item.image" :alt="item.title" class="w-full" />
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Drawing',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    computed: {
      color() {
        return this.item.color.join(' ')
      }
    }
  }
</script>
