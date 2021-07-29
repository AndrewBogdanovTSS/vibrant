export const state = () => ({
  drawings: []
})

export const getters = {
  currentObject: state => id => state.objects[id]
}

export const mutations = {
  setDrawings(state, drawings) {
    state.drawings = drawings
  }
}

export const actions = {
  async getDrawings({commit}) {
    const drawings = await this.$axios.$get('/drawings')
    commit('setDrawings', drawings)
  }
}
