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
          {
            title: 'Install',
            path: '/mv-dashboard/install/',
            collapsable: true,
            children: [
              ['/mv-dashboard/install/unix/', 'Unix'],
              ['/mv-dashboard/install/windows/', 'Windows']
            ]
          },
          {
            title: 'Integration',
            path: '/mv-dashboard/integration/',
            collapsable: true,
            children: [
              ['/mv-dashboard/integration/other-applications/', 'Other Applications'],
              ['/mv-dashboard/integration/using-emailed-login/', 'Using Emailed Login'],
              ['/mv-dashboard/integration/web-service-login/', 'Web Service Login']          
            ]
          },
          {
            title: 'Optional Parameters',
            path: '/mv-dashboard/optional-parameters/',
            collapsable: true,
            children: [
              ['/mv-dashboard/optional-parameters/line-bar-area-column-pie-and-doughnut-charts-2d-and-3d/', 'Line, Bar, Area, Column, Pie and Doughnut Charts (2D & 3D)'],
              ['/mv-dashboard/optional-parameters/trendlines/', 'Trendlines'],
              ['/mv-dashboard/optional-parameters/2d-area-charts/', '2D Area Charts'],
              ['/mv-dashboard/optional-parameters/2d-line-charts/', '2D Line Charts'],
              ['/mv-dashboard/optional-parameters/column-line-area-and-bar/', 'Column Line Area and Bar'],
              ['/mv-dashboard/optional-parameters/multiseries-and-stacked-charts/', 'Multiseries and Stacked Charts'],
              ['/mv-dashboard/optional-parameters/pie-and-doughnut-charts/', 'Pie and Doughnut Charts'],
              ['/mv-dashboard/optional-parameters/single-series-and-pie-charts/', 'Single Series and Pie Charts']
            ]
          },
          ['/mv-dashboard/pie-charts/', 'Pie Charts'],
          ['/mv-dashboard/programming-notes/', 'Programming Notes'],
          ['/mv-dashboard/single-series-and-multi-series-bar-column-line-and-area-charts/', 'Single Series and Multi Series Bar Column Line and Area Charts'],
          ['/mv-dashboard/specifying-colors/', 'Specifying Colors'],
          ['/mv-dashboard/text-data/', 'Text Data'],
          ['/mv-dashboard/text-tables/', 'Text Tables'],
          ['/mv-dashboard/theme-management/', 'Theme Management'],
          ['/mv-dashboard/upgrading-mv-dashboard/', 'Upgrading MV Dashboard'],
          ['/mv-dashboard/user-input/', 'User Input'],
          ['/mv-dashboard/pdf-generation/', 'PDF Generation'],
          {
            title: 'Widgets',
            path: '/mv-dashboard/widgets/',
            collapsable: true,
            children: [
              ['/mv-dashboard/widgets/technical-overview/', 'Technical Overview'],
              ['/mv-dashboard/widgets/types/', 'Types'],
              ['/mv-dashboard/widgets/output-type-codes/', 'Output Type Codes'],
              ['/mv-dashboard/widgets/programming-environment/', 'Programming Environment'],
              ['/mv-dashboard/widgets/testing-and-debugging/', 'Testing and Debugging']
            ]
          },
          {
            title: 'Uninstall',
            path: '/mv-dashboard/uninstall/',
            collapsable: true,
            children: [
              ['/mv-dashboard/uninstall/unix/', 'Unix'],
              ['/mv-dashboard/uninstall/windows/', 'Windows']
            ]
          }   
        ]
      },
      {
        title: 'MV Connect',
        path: '/mv-connect/',
        collapsable: true,
        children: [
          ['/mv-connect/get-started/', 'Get Started'],
          ['/mv-connect/1.6.3-release-notes/', '1.6.3 Release Notes'],
          ['/mv-connect/connection-pooling/', 'Connection Pooling'],
          {
            title: 'API',
            path: '/mv-connect/api/',
            collapsable: true,
            children: [
              ['/mv-connect/api/wgetheader/', 'wgetheader'],
              ['/mv-connect/api/wgetinfo/', 'wgetinfo'],
              ['/mv-connect/api/wgetparam/', 'wgetparam'],
              ['/mv-connect/api/wgetvar/', 'wgetvar'],
              ['/mv-connect/api/wobj/', 'wobj'],
              ['/mv-connect/api/wparsejson/', 'wparsejson'],
              ['/mv-connect/api/wsend/', 'wsend'],
              ['/mv-connect/api/wsetbuffer/', 'wsetbuffer'],
              ['/mv-connect/api/wsetcontenttype/', 'wsetcontenttype'],
              ['/mv-connect/api/wsetcookie/', 'wsetcookie'],
              ['/mv-connect/api/wsetheader/', 'wsetheader'],
              ['/mv-connect/api/wsetstatus/', 'wsetstatus'],
              ['/mv-connect/api/www.info/', 'www.info'],
              ['/mv-connect/api/wbuildjson/', 'wbuildjson'],
              ['/mv-connect/api/wdb.resource/', 'wdb.resource'],
              ['/mv-connect/api/wdebug/', 'wdebug'],
              ['/mv-connect/api/wencodejson/', 'wencodejson'],
              ['/mv-connect/api/wflush/', 'wflush'],
              ['/mv-connect/api/wgetbody/', 'wgetbody'],
              ['/mv-connect/api/wgetconfig/', 'wgetconfig'],
              ['/mv-connect/api/wgetcookie/', 'wgetcookie']
            ]
          },
          ['/mv-connect/manual/', 'Manual'],
          ['/mv-connect/security/', 'Security'],
          ['/mv-connect/introduction-to-troubleshooting/', 'Introduction to Troubleshooting'],
          {
            title: 'Troubleshooting',
            path: '/mv-connect/troubleshooting/',
            collapsable: true,
            children: [
              ['/mv-connect/troubleshooting/web-server/', 'Web Server'],
              ['/mv-connect/troubleshooting/wdebug/', 'WDEBUG']
            ]
          }
        ]
      },
      {
        title: 'Customer Portal',
        path: '/customer-portal/',
        collapsable: true,
        children: [
          ['/customer-portal/registration/', 'Registration'],
          ['/customer-portal/support-tickets/', 'Support Tickets'],
          ['/customer-portal/navigation/', 'Navigation'],
          ['/customer-portal/customer-management/', 'Customer Management']
        ]
      },
      ["/docs/jbase/", "jBASE"]
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