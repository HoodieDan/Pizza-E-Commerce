<template>
  <div :class="{ 'no-scroll-sm': navIsOpen || signInIsOpen }">
    <AppHeaderVue
      :nav-is-open="navIsOpen"
      :sign-in-is-open="signInIsOpen"
      class="sticky-top"
      @toggle-nav="navIsOpen = !navIsOpen"
      @toggle-sign-in="signInIsOpen = !signInIsOpen"
    />
    <Nuxt />
    <AppFooterVue />
  </div>
</template>

<script>
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
  }
}
</script>
