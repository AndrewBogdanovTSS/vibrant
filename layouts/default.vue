<template>
  <div>
    <header class="bg-red-600 py-3 <md:px-3">
      <div class="container mx-auto flex justify-between">
        <nuxt-link to="/">
          <Logo class="text-white" />
        </nuxt-link>
        <button
          @click="saveJSON"
          class="bg-white rounded-full px-3 py-2 border-2 border-transparent hover:border-red-500 duration-300"
        >
          Download JSON
        </button>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {downloadObjectAsJson} from '@/utils'

  export default {
    computed: {
      ...mapState(['drawings'])
    },
    methods: {
      saveJSON() {
        downloadObjectAsJson(this.drawings, 'drawings')
      }
    }
  }
</script>
