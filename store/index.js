import Vue from 'vue'

export const state = () => ({
  objects: {}
})

export const getters = {
  currentObject: state => id => state.objects[id]
}

export const mutations = {
  addObject(state, obj) {
    Vue.set(state.objects, obj.id, obj)
  }
}

export const actions = {
  async getObject({commit}, link) {
    const object = await this.$axios.$get(link)
    console.log('object:', object)
    if (object.primaryImageSmall) commit('addObject', {id: object.objectID, image: object.primaryImageSmall})
  }
}
