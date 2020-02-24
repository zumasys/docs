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
    // Social sharing buttons on right tab
    "social-share": {},
    // Meta data
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
      /*{
        title: 'AccuTerm',
        path: '/accuterm/',
        collapsable: true,
        children: [
          ['/accuterm/mobile/', 'Mobile'],
          ['/accuterm/web/', 'Web']
        ]
      },*/        
      {
        title: 'AccuTerm',
        path: '/accuterm/',
        collapsable: true,
        children: [
          {
            title: 'Mobile',
            path: '/accuterm/mobile/',
            collapsable: true,
            children: [
              ['/accuterm/mobile/quick-start/', 'Quick Start'],
              ['/accuterm/mobile/colors-and-themes-settings/', 'Colors & Themes Settings'],       
              ['/accuterm/mobile/connection-settings/', 'Connection Settings'],
              ['/accuterm/mobile/keyboard-and-clipboard-settings/', 'Keyboard & Clipboard Settings'],
              ['/accuterm/mobile/screen-settings/', 'Screen Settings'],
              ['/accuterm/mobile/terminal-settings/', 'Terminal Settings'],
              ['/accuterm/mobile/user-guide/', 'User Guide']
            ]
          },
          {
            title: 'Web',
            path: '/accuterm/web/',
            collapsable: true,
            children: [
              ['/accuterm/web/web-introduction/', 'Web Introduction'],
              ['/accuterm/web/getting-started/', 'Getting Started'],
              ['/accuterm/web/release-notes/', 'Release Notes'],
              ['/accuterm/web/activating-accuterm-desktop-licensing/', 'Activating AccuTerm Desktop Licensing'],
              ['/accuterm/web/batch-user-actions/', 'Batch User Actions'],
              ['/accuterm/web/change-password/', 'Change AccuTerm.IO Password'],
              ['/accuterm/web/clipboard-settings/', 'Clipboard Settings'],
              ['/accuterm/web/connection-settings/', 'Connection Settings'],
              ['/accuterm/web/creating-profiles/', 'Creating Profiles'],
              ['/accuterm/web/creating-roles/', 'Creating Roles'],
              ['/accuterm/web/creating-users/', 'Creating Users'],
              ['/accuterm/web/font-and-character-settings/', 'Font & Character Settings'],
              ['/accuterm/web/installing-accuterm-io-server/', 'Installing AccuTerm IO Server'],
              ['/accuterm/web/keyboard-options/', 'Keyboard Options'],
              ['/accuterm/web/mouse-settings/', 'Mouse Settings'],
              ['/accuterm/web/sound-settings/', 'Sound Settings'],
              ['/accuterm/web/terminal-screen-options/', 'Terminal Screen Options'],
              ['/accuterm/web/terminal-settings/', 'Terminal Settings'],
              ['/accuterm/web/web-profiles/', 'Web Profiles'],
              ['/accuterm/web/rezume-session-resilience/', 'AccuTerm ReZume Session Resilience'],
              ['/accuterm/web/phi-reports/', 'PHI Reports']             
            ]
          }
        ]
      },
      ["/docs/jbase/", "jBASE"],
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