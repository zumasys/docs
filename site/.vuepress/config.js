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
      '@vssue/vuepress-plugin-vssue': {
        platform: 'github', // set `platform` rather than `api`
        owner: 'zumasys',
        repo: 'docs',
        clientId: process.env.VUE_APP_GITHUB_CLIENT_ID, //'8896d1734b2a82212c63',
        clientSecret: process.env.VUE_APP_GITHUB_CLIENT_SECRET //'e3291416600be104bb6dda34b591ceb29d7522ce'
      }
  },
  //theme: 'theme',
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
      ["/docs/zumasys/internal-applications/", "Internal Applications"],
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
