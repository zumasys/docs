import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Assistant from './components/Assistant.vue'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Assistant', Assistant)
    app.component('PageHeader', PageHeader)
    app.component('PageFooter', PageFooter)
  },
} satisfies Theme
