<template>
  <div>
    <header class="bg-red-600 p-3 flex justify-between">
      <nuxt-link to="/">
        <Logo class="text-white" />
      </nuxt-link>
      <button
        @click="downloadObjectAsJson(objects)"
        class="bg-white rounded-full px-3 py-2 border-2 border-transparent hover:border-red-500 duration-300"
      >
        Download JSON
      </button>
    </header>
    <Nuxt keep-alive />
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Logo from '@/components/Logo.vue'
  import {downloadObjectAsJson} from '@/utils'

  export default {
    components: {Logo},
    computed: {
      ...mapState(['objects'])
    },
    methods: {
      downloadObjectAsJson
    }
  }
</script>
