require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico" }]],
  title: "Product Documentation",
  description:
    "Your home for Rover Business Suite product support and documentation.",
  markdown: {
    lineNumbers: true
  },
  configureWebpack: config => {
    // Set environment variables based on NODE_ENV
    const env =
      process.env.NODE_ENV === "production"
        ? { ...process.env }
        : { ...process.env.development };
    return { plugins: [new webpack.EnvironmentPlugin(env)] };
  },
  plugins: {
    // TypeScript in .vue files, markdown files and enhanceApp.ts
    "vuepress-plugin-typescript": {
      tsLoaderOptions: {
        // All options of ts-loader
      }
    },
    // Loading Progress Bar
    "vuepress-plugin-nprogress": {},
    // Reading Progress Bar
    "reading-progress": {
      readingDir: [
        "rover"
      ]
    },
    // Add article reading time estimate
    "vuepress-plugin-reading-time": {},
    // Copy icon on <code>
    "vuepress-plugin-code-copy": {
      selector: 'pre[class*="language-"] code',
      align: "top",
      color: "#eb6b3b",
      backgroundColor: "#eb6b3b",
      staticIcon: true
    },
    '@vuepress/google-analytics': {
      'ga': 'UA-115027826-9' // UA-00000000-0
    },
    'sitemap': {
      hostname: 'https://docs.zumasys.com'
    }
  },
  themeConfig: {
    logo: "/assets/img/logo-grey.png",
    nav: [
      { text: "Home", link: "/" },
    ],
    sidebar: [
      "/",
      {
        title: "Rover ERP",
        path: "/rover/",
        collapsable: true,
        children: [
          {
            title: "Administration",
            path: "/rover/administration/",
            collapsable: true,
            children: [
              ["/rover/administration/", "Administration"],
              ["/rover/administration/client-setup/", "Client Setup"],
              ["/rover/administration/m3-services/", "M3 Services Setup"],
            ]
          },
          {
            title: "ACE Utilities",
            path: "/rover/ACE-OVERVIEW/",
            collapsable: true,
            children: [
              ["/rover/ACE-OVERVIEW/ACE-ENTRY/", "ACE Entry"],
              ["/rover/ACE-OVERVIEW/ACE-PROCESS/", "ACE Process"],
              ["/rover/ACE-OVERVIEW/ACE-REPORT/", "ACE Report"]]
          },
          {
            title: "Accounts Payable",
            path: "/rover/AP-OVERVIEW/",
            collapsable: true,
            children: [
              ["/rover/AP-OVERVIEW/AP-ENTRY/", "AP Entry"],
              ["/rover/AP-OVERVIEW/AP-PROCESS/", "AP Process"],
              ["/rover/AP-OVERVIEW/AP-REPORT/", "AP Report"]]
          },
          {
            title: "Accounts Receivable",
            path: "/rover/AR-OVERVIEW/",
            collapsable: true,
            children: [
              ["/rover/AR-OVERVIEW/AR-ENTRY/", "AR Entry"],
              ["/rover/AR-OVERVIEW/AR-PROCESS/", "AR Process"],
              ["/rover/AR-OVERVIEW/AR-REPORT/", "AR Report"]]
          },
          {
            title: "Document Control",
            path: "/rover/DOC-OVERVIEW/",
            collapsable: true,
            children: [
              ["/rover/DOC-OVERVIEW/DOC-ENTRY/", "DOC Entry"],
              ["/rover/DOC-OVERVIEW/DOC-PROCESS/", "DOC Process"],
              ["/rover/DOC-OVERVIEW/DOC-REPORT/", "DOC Report"],
              ["/rover/DOC-OVERVIEW/Doc-Control/", "DOC Control"]]
          },
          {
            title: "Engineering",
            path: "/rover/ENG-OVERVIEW/",
            collapsable: true,
            children: [
              ["/rover/ENG-OVERVIEW/ENG-ENTRY/", "ENG Entry"],
              ["/rover/ENG-OVERVIEW/ENG-PROCESS/", "ENG Process"],
              ["/rover/ENG-OVERVIEW/ENG-REPORT/", "ENG Report"]]
          },
          {
            title: "Executive Summary",
            path: "/rover/EXEC-OVERVIEW/",
            collapsable: true,
            children: [
              ["/rover/EXEC-OVERVIEW/EXEC-ENTRY/", "Executive Entry"],
              ["/rover/EXEC-OVERVIEW/EXEC-PROCESS/", "Executive Process"],
              ["/rover/EXEC-OVERVIEW/EXEC-REPORT/", "Executive Report"]]
          },
          {
            title: "Field Service",
            path: "/rover/FS-OVERVIEW/",
            collapsable: true,
            children: [
              ["/rover/FS-OVERVIEW/FS-ENTRY/", "Field Service Entry"],
              ["/rover/FS-OVERVIEW/FS-PROCESS/", "Field Service Process"],
              ["/rover/FS-OVERVIEW/FS-REPORT/", "Field Service Report"]]
          },
          {
            title: "General Ledger",
            path: "/rover/GL-OVERVIEW/",
            collapsable: true,
            children: [
              ["/rover/GL-OVERVIEW/GL-ACCOUNT-FLOW/", "GL Account Flow"],
              ["/rover/GL-OVERVIEW/GL-ENTRY/", "GL Entry"],
              ["/rover/GL-OVERVIEW/GL-PROCESS/", "GL Process"],
              ["/rover/GL-OVERVIEW/GL-REPORT/", "GL Report"]]
          },
          {
            title: "Inventory",
            path: "/rover/INV-OVERVIEW/",
            collapsable: true,
            children: [
              ["/rover/INV-OVERVIEW/INV-ENTRY/", "Inventory Entry"],
              ["/rover/INV-OVERVIEW/INV-PROCESS/", "Inventory Process"],
              ["/rover/INV-OVERVIEW/INV-REPORT/", "Inventory Report"]]
          },
          {
            title: "Manufacturing Planning",
            path: "/rover/MFG-OVERVIEW/",
            collapsable: true,
            children: [
              ["/rover/MFG-OVERVIEW/MFG-ENTRY/", "Manufacturing Entry"],
              ["/rover/MFG-OVERVIEW/MFG-PROCESS/", "Manufacturing Process"],
              ["/rover/MFG-OVERVIEW/MFG-REPORT/", "Manufacturing Report"]]
          },
          {
            title: "Marketing ",
            path: "/rover/MRK-OVERVIEW/",
            collapsable: true,
            children: [
              ["/rover/MRK-OVERVIEW/MRK-ENTRY/", "Marketing Entry"],
              ["/rover/MRK-OVERVIEW/MRK-PROCESS/", "Marketing Process"],
              ["/rover/MRK-OVERVIEW/MRK-REPORT/", "Marketing Report"]]
          },
          {
            title: "Production",
            path: "/rover/PRO-OVERVIEW/",
            collapsable: true,
            children: [
              ["/rover/PRO-OVERVIEW/PRO-ENTRY/", "Production Entry"],
              ["/rover/PRO-OVERVIEW/PRO-PROCESS/", "Production Process"],
              ["/rover/PRO-OVERVIEW/PRO-REPORT/", "Production Report"]]
          },
          ["/rover/PROJ-OVERVIEW/", "Project Management"],
          {
            title: "Purchasing",
            path: "/rover/PUR-OVERVIEW/",
            collapsable: true,
            children: [
              ["/rover/PUR-OVERVIEW/PUR-ENTRY/", "Purchasing Entry"],
              ["/rover/PUR-OVERVIEW/PUR-PROCESS/", "Purchasing Process"],
              ["/rover/PUR-OVERVIEW/PUR-REPORT/", "Purchasing Report"]]
          },
          ["/rover/workflow-management/", "Workflow Management"]
        ]
      },
      {
        title: "Rover POS",
        path: "/rover/business-suite/pos/",
      },
      {
        title: "Rover Pay",
        path: "/rover/business-suite/pay/",
      },
      {
        title: "Rover BI",
        path: "/rover/business-suite/bi/",
      },
      {
        title: "Rover Sales",
        path: "/rover/business-suite/sales/",
      },
      {
        title: "Rover Portal",
        path: "/rover/business-suite/portal/",
      },
      {
        title: "Rover Gateway",
        path: "/rover/business-suite/gateway/",
      },
      {
        title: "Release Notes",
        path: "/rover/release-notes/",
      },
    ],
    repo: "https://github.com/zumasys/docs",
    docsBranch: "master",
    docsDir: "site",
    editLinks: true,
    nextLinks: false,
    prevLinks: false,
    editLinkText: "Help us improve this page!",
    lastUpdated: "Last Updated"
  }
};
