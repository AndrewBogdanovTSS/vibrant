<template>
  <main>
    <h1>Hello from pic {{ $route.params.id }}</h1>
    <nuxt-link to="/">Back</nuxt-link>
    <template v-if="!$fetchState.pending && item">
      <img :src="item.primaryImageSmall" alt="img" />
    </template>
  </main>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'page-picture',
    async fetch() {
      // this.item = await this.$axios.$get(`objects/${this.$route.params.id}`)
      console.log('item:', this.item)
      if (!this.item) await this.$axios.$get(`objects/${this.$route.params.id}`)
    },
    computed: {
      ...mapGetters(['currentObject']),
      item() {
        console.log('this.$route.params.id:', this.$route.params.id)
        return this.currentObject(this.$route.params.id)
      }
    }
  }
</script>
