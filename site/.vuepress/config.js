//.vuepress/config.js
require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico" }]],
  title: "Product Documentation",
  description: "New home for docs!",
  markdown: {
    lineNumbers: true
  },
  configureWebpack: config => {
    return { plugins: [new webpack.EnvironmentPlugin({ ...process.env })] };
  },
  plugins: {
    "@vuepress/search": { searchMaxSuggestions: 10 },
    // Vssue (uses gitlab issues to comment)
    "@vssue/vuepress-plugin-vssue": {
      platform: "github", // set `platform` rather than `api`
      owner: "zumasys",
      repo: "docs",
      clientId: process.env.VUE_APP_GITHUB_CLIENT_ID,
      clientSecret: process.env.VUE_APP_GITHUB_CLIENT_SECRET
    },
    // TypeScript in .vue files, markdown files and enhanceApp.ts
    "vuepress-plugin-typescript": {
      tsLoaderOptions: {
        /* All options of ts-loader */
      }
    },
    // Git Log/Details
    "git-log": { onlyFirstAndLastCommit: false },
    // Loading Progress Bar
    "vuepress-plugin-nprogress": {},
    // Reading Progress Bar
    // We'll probably need to update this path once things go live (https://github.com/tolking/vuepress-plugin-reading-progress)
    "reading-progress": { readingDir: "docs" },
    // Add article reading time estimate
    "vuepress-plugin-reading-time": {},
    "vuepress-plugin-code-copy": {
      selector: 'pre[class*="language-"] code',
      align: 'top',
      color: '#eb6b3b',
      backgroundColor: '#eb6b3b',
      staticIcon: true
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