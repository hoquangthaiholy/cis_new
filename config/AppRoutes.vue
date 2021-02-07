<script>
import Dashboard from '../pages/Dashboard.vue'
import Analytics from '../pages/Analytics.vue'
import EmailInbox from '../pages/EmailInbox.vue'
import EmailCompose from '../pages/EmailCompose.vue'
import EmailDetail from '../pages/EmailDetail.vue'
import Widgets from '../pages/Widgets.vue'
import UiBootstrap from '../pages/UiBootstrap.vue'
import UiButtons from '../pages/UiButtons.vue'
import UiCard from '../pages/UiCard.vue'
import UiIcons from '../pages/UiIcons.vue'
import UiModalNotifications from '../pages/UiModalNotifications.vue'
import UiTypography from '../pages/UiTypography.vue'
import UiTabsAccordions from '../pages/UiTabsAccordions.vue'
import FormElements from '../pages/FormElements.vue'
import FormPlugins from '../pages/FormPlugins.vue'
import FormWizards from '../pages/FormWizards.vue'
import TableElements from '../pages/TableElements.vue'
import TablePlugins from '../pages/TablePlugins.vue'
import ChartJs from '../pages/ChartJs.vue'
import ChartApex from '../pages/ChartApex.vue'
import Map from '../pages/Map.vue'
import LayoutStarterPage from '../pages/LayoutStarterPage.vue'
import LayoutFixedFooter from '../pages/LayoutFixedFooter.vue'
import LayoutFullHeight from '../pages/LayoutFullHeight.vue'
import LayoutFullWidth from '../pages/LayoutFullWidth.vue'
import LayoutBoxedLayout from '../pages/LayoutBoxedLayout.vue'
import LayoutMinifiedSidebar from '../pages/LayoutMinifiedSidebar.vue'
import PageGallery from '../pages/PageGallery.vue'
import PageSearchResults from '../pages/PageSearchResults.vue'
import PageComingSoon from '../pages/PageComingSoon.vue'
import PageError from '../pages/PageError.vue'
import PageLogin from '../pages/PageLogin.vue'
import PageRegister from '../pages/PageRegister.vue'
import Profile from '../pages/Profile.vue'
import Calendar from '../pages/Calendar.vue'
import Settings from '../pages/Settings.vue'
import Helper from '../pages/Helper.vue'

const routes = [
	{ path: '*', redirect: '/dashboard' },
  { path: '/dashboard', component: Dashboard },
  { path: '/analytics', component: Analytics },
  { path: '/email/inbox', component: EmailInbox },
  { path: '/email/compose', component: EmailCompose },
  { path: '/email/detail/:id', component: EmailDetail },
  { path: '/email/detail', component: EmailDetail },
  { path: '/widgets', component: Widgets },
  { path: '/ui/bootstrap', component: UiBootstrap },
  { path: '/ui/buttons', component: UiButtons },
  { path: '/ui/card', component: UiCard },
  { path: '/ui/icons', component: UiIcons },
  { path: '/ui/modal-notifications', component: UiModalNotifications },
  { path: '/ui/typography', component: UiTypography },
  { path: '/ui/tabs-accordions', component: UiTabsAccordions },
  { path: '/form/elements', component: FormElements },
  { path: '/form/plugins', component: FormPlugins },
  { path: '/form/wizards', component: FormWizards },
  { path: '/table/elements', component: TableElements },
  { path: '/table/plugins', component: TablePlugins },
  { path: '/chart/chart-js', component: ChartJs },
  { path: '/chart/chart-apex', component: ChartApex },
  { path: '/map', component: Map },
  { path: '/layout/starter-page', component: LayoutStarterPage },
  { path: '/layout/fixed-footer', component: LayoutFixedFooter },
  { path: '/layout/full-height', component: LayoutFullHeight },
  { path: '/layout/full-width', component: LayoutFullWidth },
  { path: '/layout/boxed-layout', component: LayoutBoxedLayout },
  { path: '/layout/minified-sidebar', component: LayoutMinifiedSidebar },
  { path: '/page/gallery', component: PageGallery },
  { path: '/page/search-results', component: PageSearchResults },
  { path: '/page/coming-soon', component: PageComingSoon },
  { path: '/page/error', component: PageError },
  { path: '/page/login', component: PageLogin },
  { path: '/page/register', component: PageRegister },
  { path: '/profile', component: Profile },
  { path: '/calendar', component: Calendar },
  { path: '/settings', component: Settings },
  { path: '/helper', component: Helper }
]

export default routes;
</script>
