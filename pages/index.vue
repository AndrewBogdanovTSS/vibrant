<template>
  <main class="container mx-auto px-3">
    <transition name="fade">
      <loader v-if="$fetchState.pending" class="h-24" />
      <div v-else class="container mx-auto pt-3">
        <masonry :cols="3" :gutter="12">
          <drawing v-for="drawing in drawings" :item="drawing" :key="drawing.id" />
        </masonry>
      </div>
    </transition>
  </main>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    async fetch() {
      await this.getDrawings()
    },
    computed: {
      ...mapState(['drawings'])
    },
    methods: {
      ...mapActions(['getDrawings'])
    }
  }
</script>
