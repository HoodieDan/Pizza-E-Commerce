<template>
  <div>
    <AppHeaderVue />
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
  components: { AppHeaderVue, AppFooterVue }
}
</script>
