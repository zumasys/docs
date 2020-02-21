//.vuepress/config.js
require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico" }]],
  title: "Zumasys Documentation",
  description: "The official knowledgebase for all Zumasys products, including: jBASE, AccuTerm, OpenQM, MV Dashboard, MV Connect and the Customer Portal.",
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
        // All options of ts-loader
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
    // Copy icon on <code>
    "vuepress-plugin-code-copy": {
      selector: 'pre[class*="language-"] code',
      align: 'top',
      color: '#eb6b3b',
      backgroundColor: '#eb6b3b',
      staticIcon: true
    },
    "social-share": {},
    'seo': { 
      //siteTitle: (_, $site) => $site.title,
      //title: $page => $page.title,
      //description: $page => $page.frontmatter.description,
      author: ($page, $site) => $page.git.author || $site.themeConfig.author // author: (_, $site) => $site.themeConfig.author,
      //tags: $page => $page.frontmatter.tags,
      //twitterCard: _ => 'summary_large_image',
      //type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      //url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      //image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
      //publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      //modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
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