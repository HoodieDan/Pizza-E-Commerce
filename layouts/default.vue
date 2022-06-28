<template>
  <div class="page">
    <AppHeaderVue
      class="sticky-top"
      :nav-is-open="navIsOpen"
      :sign-in-is-open="signInIsOpen"
      @toggle-nav="navIsOpen = !navIsOpen"
      @toggle-sign-in="signInIsOpen = !signInIsOpen"
    />
    <Nuxt :class="{'no-scroll-lg': cartIsOpen}" />
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
      signInIsOpen: false
    }
  },
  methods: {
    ...mapState(['cartIsOpen']),
    closeAll () {
      this.navIsOpen = false
      this.signInIsOpen = false
      this.cartIsOpen = false
    }
  }
}
</script>
