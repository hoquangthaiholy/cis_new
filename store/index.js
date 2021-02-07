export const state = () => ({
  appBoxedLayout: false,
  appSidebarMinified: false,
  appSidebarMobileToggled: false,
  appSidebarMobileClosed: false,
  appContentFullWidth: false,
  appContentFullHeight: false,
  appWithFooter: false,
  appWithoutSidebar: false,
  appWithoutHeader: false,
})

export const mutations = {
  toggleAppSidebarMobile(state) {
    state.appSidebarMobileToggled = !state.appSidebarMobileToggled
  },
  toggleAppSidebarMinify(state) {
    state.appSidebarMinified = !state.appSidebarMinified
  },
}

export const actions = {}
