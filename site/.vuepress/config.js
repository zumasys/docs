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
    "reading-progress": { readingDir: ["accuterm", "customer-portal", "docs", "jbase", "mv-connect", "mv-dashboard"] },
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
          ['/accuterm/getting-started/', 'Getting Started'],
          ['/accuterm/release-notes/', 'Release Notes'],
          ['/accuterm/license-activation/', 'License Activation'],
          {
            title: 'License & User Management',
            path: '/accuterm/license-and-user-management/',
            collapsable: true,
            children: [
              ['/accuterm/license-and-user-management/creating-users/', 'Creating Users'], 
              ['/accuterm/license-and-user-management/creating-roles/', 'Creating Roles'],                
              ['/accuterm/license-and-user-management/batch-actions/', 'Batch Actions']
            ]
          },
          {
            title: 'Desktop',
            path: '/accuterm/desktop/',
            collapsable: true,
            children: [
              ['/accuterm/desktop/rezume-session-resilience/', 'ReZume Session Resilience'],
              ['/accuterm/desktop/phi-reports/', 'PHI Reports']    
            ]
          },
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
              ['/accuterm/mobile/terminal-settings/', 'Terminal Settings']
            ]
          },
          {
            title: 'Web',
            path: '/accuterm/web/',
            collapsable: true,
            children: [
              ['/accuterm/web/installing-accuterm-io-server/', 'Installing AccuTerm IO Server'],
              ['/accuterm/web/creating-profiles/', 'Creating Profiles'],
              {
                title: 'Profiles',
                path: '/accuterm/web/profiles/',
                collapsable: true,
                children: [
                  ['/accuterm/web/profiles/change-password/', 'Change AccuTerm.IO Password'],
                  ['/accuterm/web/profiles/keyboard-options/', 'Keyboard Options'],
                  ['/accuterm/web/profiles/mouse-settings/', 'Mouse Settings'],
                  ['/accuterm/web/profiles/sound-settings/', 'Sound Settings'],
                  ['/accuterm/web/profiles/terminal-screen-options/', 'Terminal Screen Options'],
                  ['/accuterm/web/profiles/terminal-settings/', 'Terminal Settings'],
                  ['/accuterm/web/profiles/clipboard-settings/', 'Clipboard Settings'],
                  ['/accuterm/web/profiles/connection-settings/', 'Connection Settings'],
                  ['/accuterm/web/profiles/font-and-character-settings/', 'Font & Character Settings']
                ]
              }         
            ]
          }
        ]
      },
      {
        title: 'MV Dashboard',
        path: '/mv-dashboard/',
        collapsable: true,
        children: [
          ['/mv-dashboard/introduction/', 'Introduction'],
          {
            title: 'Installation Guide',
            path: '/mv-dashboard/installation-guide/',
            collapsable: true,
            children: [
              ['/mv-dashboard/installation-guide/requirements/', 'Requirements'],
              {
                title: 'Install',
                path: '/mv-dashboard/installation-guide/install/',
                collapsable: true,
                children: [
                  ['/mv-dashboard/installation-guide/install/linux-and-aix/', 'Linux and AIX'],
                  ['/mv-dashboard/installation-guide/install/windows/', 'Windows']
                ]
              },
              ['/mv-dashboard/installation-guide/configuration/', 'Configuration'],
              ['/mv-dashboard/installation-guide/running-in-d3-flashed-mode/', 'Running in D3 Flashed Mode'],
              ['/mv-dashboard/installation-guide/using-code-editor-to-edit-non-widget-source/', 'Using the Code Editor to Edit Non-Widget Source'],
              ['/mv-dashboard/installation-guide/starting/', 'Starting'],
              ['/mv-dashboard/installation-guide/deploy-dashboards-and-widgets-to-production-systems/', 'Deploy Dashboards and Widgets to Production Systems'],
              {
                title: 'Uninstall',
                path: '/mv-dashboard/installation-guide/uninstall/',
                collapsable: true,
                children: [
                  ['/mv-dashboard/installation-guide/uninstall/linux-and-aix/', 'Linux and AIX'],
                  ['/mv-dashboard/installation-guide/uninstall/windows/', 'Windows']
                ]
              },
              ['/mv-dashboard/installation-guide/upgrade/', 'Upgrade']
            ]
          },
          {
            title: 'Programmers Guide',
            path: '/mv-dashboard/programmers-guide/',
            collapsable: true,
            children: [
              {
                title: 'Widgets',
                path: '/mv-dashboard/programmers-guide/widgets/',
                collapsable: true,
                children: [
                  {
                    title: 'Programming Environment',
                    path: '/mv-dashboard/programmers-guide/widgets/programming-environment/',
                    collapsable: true,
                    children: [
                      ['/mv-dashboard/programmers-guide/widgets/programming-environment/technical-overview/', 'Technical Overview'],
                      ['/mv-dashboard/programmers-guide/widgets/programming-environment/general-definition/', 'General Definition'],
                      ['/mv-dashboard/programmers-guide/widgets/programming-environment/defining-links/', 'Defining Links'],
                      ['/mv-dashboard/programmers-guide/widgets/programming-environment/drill-down-widgets/', 'Drill Down Widgets'],
                      ['/mv-dashboard/programmers-guide/widgets/programming-environment/external-links/', 'External Links'],
                      ['/mv-dashboard/programmers-guide/widgets/programming-environment/user-input/', 'User Input'],
                      ['/mv-dashboard/programmers-guide/widgets/programming-environment/additional-features/', 'Additional Features']
                    ]
                  },
                  {
                    title: 'Types',
                    path: '/mv-dashboard/programmers-guide/widgets/types/',
                    collapsable: true,
                    children: [
                      ['/mv-dashboard/programmers-guide/widgets/types/default-chart-options/', 'Default Chart Options'],
                      ['/mv-dashboard/programmers-guide/widgets/types/pie-charts/', 'Pie Charts'],
                      ['/mv-dashboard/programmers-guide/widgets/types/single-series-and-multi-series-bar-column-line-and-area-charts/', 'Single Series and Multi Series Bar Column Line and Area Charts'],
                      ['/mv-dashboard/programmers-guide/widgets/types/text-tables/', 'Text Tables'],
                      ['/mv-dashboard/programmers-guide/widgets/types/html-data/', 'HTML Data'],
                      ['/mv-dashboard/programmers-guide/widgets/types/text-data/', 'Text Data'],
                      ['/mv-dashboard/programmers-guide/widgets/types/programming-notes/', 'Programming Notes'],
                      ['/mv-dashboard/programmers-guide/widgets/types/testing-and-debugging/', 'Testing and Debugging']
                    ]
                  },
                  {
                    title: 'Output Type Codes',
                    path: '/mv-dashboard/programmers-guide/widgets/output-type-codes/',
                    collapsable: true,
                    children: [
                      ['/mv-dashboard/programmers-guide/widgets/output-type-codes/specifying-colors/', 'Specifying Colors'],
                      ['/mv-dashboard/programmers-guide/widgets/output-type-codes/theme-management/', 'Theme Management']
                    ]
                  },
                  {
                    title: 'Optional Parameters',
                    path: '/mv-dashboard/programmers-guide/widgets/optional-parameters/',
                    collapsable: true,
                    children: [
                      ['/mv-dashboard/programmers-guide/widgets/optional-parameters/line-bar-area-column-pie-and-doughnut-charts-2d-and-3d/', 'Line, Bar, Area, Column, Pie and Doughnut Charts (2D & 3D)'],
                      ['/mv-dashboard/programmers-guide/widgets/optional-parameters/trendlines/', 'Trendlines'],
                      ['/mv-dashboard/programmers-guide/widgets/optional-parameters/2d-area-charts/', '2D Area Charts'],
                      ['/mv-dashboard/programmers-guide/widgets/optional-parameters/2d-line-charts/', '2D Line Charts'],
                      ['/mv-dashboard/programmers-guide/widgets/optional-parameters/column-line-area-and-bar/', 'Column Line Area and Bar'],
                      ['/mv-dashboard/programmers-guide/widgets/optional-parameters/multiseries-and-stacked-charts/', 'Multiseries and Stacked Charts'],
                      ['/mv-dashboard/programmers-guide/widgets/optional-parameters/pie-and-doughnut-charts/', 'Pie and Doughnut Charts'],
                      ['/mv-dashboard/programmers-guide/widgets/optional-parameters/single-series-and-pie-charts/', 'Single Series and Pie Charts']
                    ]
                  }       
                ]
              },
              {
                title: 'Integration',
                path: '/mv-dashboard/programmers-guide/integration/',
                collapsable: true,
                children: [
                  ['/mv-dashboard/programmers-guide/integration/other-applications/', 'Other Applications'],
                  ['/mv-dashboard/programmers-guide/integration/using-emailed-login/', 'Using Emailed Login'],
                  ['/mv-dashboard/programmers-guide/integration/web-service-login/', 'Web Service Login']          
                ]
              },
              ['/mv-dashboard/programmers-guide/pdf-generation/', 'PDF Generation'],
              ['/mv-dashboard/programmers-guide/fusion-charts/', 'Fusion Charts Documentation']
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
          ['/mv-dashboard/programmers-guide/widgets/programming-environment/additional-features/', 'Additional Features'],
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