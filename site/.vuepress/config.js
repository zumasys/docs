require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico" }]],
  title: "Zumasys: Product Documentation",
  description:
    "The knowledgebase for all Zumasys products.",
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
        "pos-connect",
        "rover",
        "smartsuite",
        "totalink"
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
          ["/rover/client-setup/", "Client Setup"],
          ["/rover/ACCOUNT-CONTROL/", "Account Control"],
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
          ["/rover/INV-OVERVIEW/", "Inventory"],
          ["/rover/M3-Services/", "Services Setup"],
          ["/rover/MFG-OVERVIEW/", "Manufacturing Planning"],
          ["/rover/MRK-OVERVIEW/", "Marketing"],
          ["/rover/PRO-OVERVIEW/", "Production"],
          ["/rover/PROJ-OVERVIEW/", "Project Management"],
          ["/rover/PUR-OVERVIEW/", "Purchasing"],
          ["/rover/POS/", "Rover POS"],
          ["/rover/workflowmgmt/", "Workflow Management"]
        ]
      },
      {
        title: "Rover POS",
        path: "/smartsuite/",
        collapsable: true,
        children: [
          ["/smartsuite/pos/balance-inquiry/", "Balance Inquiry"],
          ["/smartsuite/pos/card-on-file/", "Card on File"],
          ["/smartsuite/pos/class-specific-exemptions/", "Class Specific Exemptions"],
          ["/smartsuite/pos/colleague-split-tender-checkout/", "Split Tender Checkout"],
          ["/smartsuite/pos/coupon-gc-checkout/", "Coupons, Voucher and GC Online Checkout"],
          ["/smartsuite/pos/custom-qb-reports/", "Custom Reports via Query Builder"],
          ["/smartsuite/pos/discount-matrix/", "Discount Matrix"],
          ["/smartsuite/pos/end-of-day-procedures/", "End of Day Procedures"],
          ["/smartsuite/pos/gift-receipt-setup/", "Gift Receipt Setup"],
          ["/smartsuite/pos/kitchen-printer-setup/", "Kitchen Printer Setup"],
          ["/smartsuite/pos/loyalty-rewards-setup/", "Loyalty and Rewards"],
          ["/smartsuite/pos/mail-orders/", "Mail Orders"],
          ["/smartsuite/pos/negative-accounts-bad-checks/", "Negative Accounts/Bad Checks"],
          ["/smartsuite/pos/online-orders-resume-suspend-and-modify/", "Online Orders"],
          ["/smartsuite/pos/pos-training/", "Training Document"],
          ["/smartsuite/pos/print-pickslip/", "Print Pickslips"],
          ["/smartsuite/pos/register-reconciliation/", "Register Reconciliation"],
          ["/smartsuite/pos/reports/", "Reports"],
          ["/smartsuite/pos/resume-order-search-setup/", "Resume Order Search Setup"],
          ["/smartsuite/pos/sell-and-redeem-gift-cards/", "Sell and Redeem Gift Cards"],
          ["/smartsuite/pos/setup-of-balance-inquiry-for-gift-card/", "Setup Balance Inquiry for Gift Cards"],
          ["/smartsuite/pos/vouchers-setup/", "Voucher Setup"],
          ["/smartsuite/pos/web-order-returns/", "Web Order Returns"]
        ]
      },
      {
        title: "Rover Pay",
        path: "/totalink/",
        collapsable: true,
        children: [
          ["/totalink/", "API"],
        ]
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
