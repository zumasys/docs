import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import Assistant from './components/Assistant.vue'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import ProductLogos from './components/ProductLogos.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(Assistant),
    })
  },
  enhanceApp({ app }) {
    app.component('Assistant', Assistant)
    app.component('PageHeader', PageHeader)
    app.component('PageFooter', PageFooter)
    app.component('ProductLogos', ProductLogos)
  },
} satisfies Theme
