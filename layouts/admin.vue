<template>
  <div
    id="app"
    class="app"
    v-bind:class="{
      'app-sidebar-minified': $store.state.appSidebarMinified,
      'app-sidebar-mobile-toggled': $store.state.appSidebarMobileToggled,
      'app-sidebar-mobile-closed': $store.state.appSidebarMobileClosed,
      'app-content-full-height': $store.state.appContentFullHeight,
      'app-content-full-width': $store.state.appContentFullWidth,
      'app-without-sidebar': $store.state.appWithoutSidebar,
      'pt-0': $store.state.appWithoutHeader,
      'app-boxed-layout': $store.state.appBoxedLayout,
      'app-footer-fixed': $store.state.appWithFooter,
    }"
  >
    <Header v-if="!$store.state.appWithoutHeader" />
    <Sidebar v-if="!$store.state.appWithoutSidebar" />
    <router-view></router-view>
    <Footer v-if="$store.state.appWithFooter" />
  </div>
</template>

<script>
import AppOptions from '../config/AppOptions.vue'

export default {
  name: 'App',
  data() {
    return {
      appOptions: AppOptions,
    }
  },
  mounted() {},
  created() {},
}
</script>
