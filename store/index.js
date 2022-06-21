export const state = () => ({
  signInOpen: false,
  selectPageIsOpen: false
})

export const getters = {}

export const actions = {}

export const mutations = {
  toggleSignIn (state) {
    state.signInOpen = !state.signInOpen
  },
  toggleSelectPage (state) {
    state.selectPageIsOpen = !state.selectPageIsOpen
  }
}
