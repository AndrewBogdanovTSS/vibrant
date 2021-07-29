<template>
  <main>
    <div v-if="items.length" class="container mx-auto pt-3">
      <masonry :cols="3">
        <drawing v-for="(item, key) in objects" :item="item" :id="key" :key="key" />
      </masonry>
    </div>
  </main>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import {wait} from '@/utils'
  import Drawing from '@/components/Drawing.vue'

  export default {
    components: {
      Drawing
    },
    computed: {
      ...mapState(['objects']),
      items() {
        return Object.values(this.objects)
      }
    },
    methods: {
      ...mapActions(['getObject']),
      async loadObjects(links) {
        for (const link of links) {
          await wait(1000)
          await this.getObject(link)
        }
      }
    },
    async mounted() {
      const {objectIDs} = await this.$axios.$get('objects?departmentIds=11')
      const links = objectIDs.slice(0, 5).map(item => `objects/${item}`)
      await this.loadObjects(links)
    }
  }
</script>
