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
      {
        title: 'MV Dashboard',
        path: '/mv-dashboard/',
        collapsable: true,
        children: [
          ['/mv-dashboard/getting-started-with-mv-dashboard/', 'Getting Started with MV Dashboard'],
          ['/mv-dashboard/introduction-to-mv-dashboard/', 'Introduction to MV Dashboard'],
          ['/mv-dashboard/additional-features/', 'Additional Features'],
          ['/mv-dashboard/configure-mv-dashboard/', 'Configure MV Dashboard'],
          ['/mv-dashboard/default-chart-options/', 'Default Chart Options'],
          ['/mv-dashboard/defining-links-in-a-widget/', 'Defining Links in a Widget'],
          ['/mv-dashboard/drill-down-widgets/', 'Drill Down Widgets'],
          ['/mv-dashboard/external-links/', 'External Links'],
          ['/mv-dashboard/fusion-charts-documentation/', 'Fusion Charts Documentation'],
          ['/mv-dashboard/general-widget-definition/', 'General Widet Definition'],
          ['/mv-dashboard/html-data/', 'HTML Data'],
          ['/mv-dashboard/install-mv-dashboard-and-mv-connect-unix/', 'Install MV Dashboard/MV Connect Unix'],
          ['/mv-dashboard/install-mv-dashboard-and-mv-connect-windows/', 'Install MV Dashboard/MV Connect Windows'],
          ['/mv-dashboard/integrating-with-web-service-login/', 'Integrating with Web Service Login'],
          ['/mv-dashboard/integration-using-emailed-login/', 'Integration using Emailed Login'],
          ['/mv-dashboard/integration-with-other-applications/', 'Integration with Other Applications'],
          ['/mv-dashboard/optional-parameters-for-line-bar-area-column-pie-and-doughnut-charts-2d-and-3d/', 'Optional Parameters for Line, Bar, Area, Column, Pie and Doughnut Charts (2D & 3D)'],
          ['/mv-dashboard/optional-parameters-for-trendlines/', 'Optional Parameters for Trendlines'],
          ['/mv-dashboard/optional-parameters-unique-to-2d-area-charts/', 'Optional Parameters Unique to 2D Area Charts'],
          ['/mv-dashboard/optional-parameters-unique-to-2d-line-charts/', 'Optional Parameters Unique to 2D Line Charts'],
          ['/mv-dashboard/optional-parameters-unique-to-column-line-area-and-bar/', 'Optional Parameters Unique to Column Line Area and Bar'],
          ['/mv-dashboard/optional-parameters-unique-to-multiseries-and-stacked-charts/', 'Optional Parameters Unique to Multiseries and Stacked Charts'],
          ['/mv-dashboard/optional-parameters-unique-to-pie-and-doughnut-charts/', 'Optional Parameters Unique to Pie and Doughnut Charts'],
          ['/mv-dashboard/optional-parameters-unique-to-single-series-and-pie-charts/', 'Optional Parameters Unique to Single Series and Pie Charts'],
          ['/mv-dashboard/pie-charts/', 'Pie Charts'],
          ['/mv-dashboard/programming-notes/', 'Programming Notes'],
          ['/mv-dashboard/single-series-and-multi-series-bar-column-line-and-area-charts/', 'Single Series and Multi Series Bar Column Line and Area Charts'],
          ['/mv-dashboard/specifying-colors/', 'Specifying Colors'],
          ['/mv-dashboard/text-data/', 'Text Data'],
          ['/mv-dashboard/text-tables/', 'Text Tables'],
          ['/mv-dashboard/theme-management/', 'Theme Management'],
          ['/mv-dashboard/uninstall-mv-dashboard-unix/', 'Uninstall MV Dashboard Unix'],
          ['/mv-dashboard/uninstall-mv-dashboard-windows/', 'Uninstall MV Dashboard Windows'],
          ['/mv-dashboard/upgrading-mv-dashboard/', 'Upgrading MV Dashboard'],
          ['/mv-dashboard/user-input/', 'User Input'],
          ['/mv-dashboard/widget-programming-environment/', 'Widget Programming Environment'],
          ['/mv-dashboard/widget-technical-overview/', 'Widget Technical Overview'],
          ['/mv-dashboard/widget-testing-and-debugging/', 'Widget Testing and Debugging'],
          ['/mv-dashboard/widget-types/', 'Widget Types'],
          ['/mv-dashboard/appendix-iii-pdf-generation/', 'Appendix III PDF Generation'],
          ['/mv-dashboard/appendix-ii-optional-parameters/', 'Appendix II Optional Parameters'],
          ['/mv-dashboard/appendix-i-widget-output-type-codes/', 'Appendix I Widget Output Type Codes'],
          ['/mv-dashboard/articles/', 'Articles']
        ]
      },
      ["/docs/jbase/", "jBASE"],
      ["/docs/zumasys/customer-portal/", "Customer Portal"],
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