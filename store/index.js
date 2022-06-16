export const state = () => ({
  signInOpen: false
})

export const getters = {}

export const actions = {}

export const mutations = {
  toggleSignIn (state) {
    state.signInOpen = !state.signInOpen
  }
}
