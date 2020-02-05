//.vuepress/config.js
require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico" }]],
  title: "Beta Documentation",
  description: "New home for docs!",
  markdown: {
    lineNumbers: true
  },
  configureWebpack: (config) => {
    return { plugins: [
      new webpack.EnvironmentPlugin({ ...process.env })
    ]}
  },
  plugins: {
      "@vuepress/search": {
        searchMaxSuggestions: 10
      },
      // Vssue (uses gitlab issues to comment)
      '@vssue/vuepress-plugin-vssue': {
        platform: 'github', // set `platform` rather than `api`
        owner: 'zumasys',
        repo: 'docs',
        clientId: process.env.VUE_APP_GITHUB_CLIENT_ID,
        clientSecret: process.env.VUE_APP_GITHUB_CLIENT_SECRET
      },
      // TypeScript
      'vuepress-plugin-typescript': {
        tsLoaderOptions: {
          // All options of ts-loader
        },
      }
  },
  themeConfig: {
    logo: "/assets/img/logo-grey.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/" }
    ],
    sidebar: [
      "/",
      ["/docs/", "Docs"],
      ["/docs/jbase/", "jBASE"],
      ["/docs/zumasys/accuterm-mobile/", "AccuTerm Mobile"],
      ["/docs/zumasys/accuterm-web/", "AccuTerm Web"],
      ["/docs/zumasys/customer-portal/", "Customer Portal"],
      ["/docs/zumasys/mv-dashboard/", "MV Dashboard"],
      ["/docs/zumasys/mvconnect/", "MV Connect"]
    ],
    repo: "https://github.com/zumasys/docs",
    docsBranch: "master",
    docsDir: "site",
    editLinks: true,
    nextLinks: false,
    prevLinks: false,
    editLinkText: "Help us improve this page!"
  }
};
