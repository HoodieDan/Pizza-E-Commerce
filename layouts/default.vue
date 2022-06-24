<template>
  <div class="page" :class="{ 'no-scroll-sm': navIsOpen }">
    <AppHeaderVue
      class="sticky-top"
      :nav-is-open="navIsOpen"
      :sign-in-is-open="signInIsOpen"
      :cart-is-open="cartIsOpen"
      @toggle-nav="navIsOpen = !navIsOpen"
      @toggle-sign-in="signInIsOpen = !signInIsOpen"
      @toggle-cart="cartIsOpen = !cartIsOpen"
    />
    <Nuxt />
    <AppFooterVue />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppHeaderVue from '~/components/inc/AppHeader.vue'
import AppFooterVue from '~/components/inc/AppFooter.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Default',
  components: { AppHeaderVue, AppFooterVue },
  data () {
    return {
      navIsOpen: false,
      signInIsOpen: false,
      cartIsOpen: false
    }
  },
  computed: {
    ...mapState(['selectPageIsOpen'])
  }
}
</script>
