//.vuepress/config.js
require("dotenv").config();
const webpack = require("webpack");

//const getConfig = require("vuepress-bar");
//const barConfig = getConfig("site/..");

module.exports = {
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico" }]],
  title: "Zumasys Documentation",
  description:
    "The official knowledgebase for all Zumasys products.",
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
    // Git Log/Details
    "git-log": { onlyFirstAndLastCommit: false },
    // Loading Progress Bar
    "vuepress-plugin-nprogress": {},
    // Reading Progress Bar
    // We'll probably need to update this path once things go live (https://github.com/tolking/vuepress-plugin-reading-progress)
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
    // Social sharing buttons on right tab
    "social-share": {},
    // Meta data
    seo: {
      //author: ($page, $site) => $page.git.authorName || $site.themeConfig.author // author: (_, $site) => $site.themeConfig.author
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
    algolia: {
      apiKey: process.env.VUE_APP_ALGOLIA_API_KEY,
      indexName: process.env.VUE_APP_ALGOLIA_INDEX_NAME
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Docs",
        ariaLabel: "Documentation Menu",
        items: [
          { text: "POS Connect", link: "/pos-connect/" },
          { text: "Rover", link: "/rover/" },
          { text: "Smart Suite", link: "/smartsuite/" },
          { text: "TotaLink", link: "/totalink/" }
        ]
      }
    ],
    //sidebar: barConfig.sidebar,
    sidebar: [
      "/", {
        title: "AccuTerm",
        path: "/accuterm/",
        collapsable: true,
        children: [
          ["/accuterm/getting-started/", "Getting Started"],
          {
            title: "Release Notes",
            path: "/accuterm/release-notes/",
            collapsable: true,
            children: [["/accuterm/release-notes/8.0.1023/", "8.0.1023"]]
          },
          ["/accuterm/license-activation/", "License Activation"],
          {
            title: "License & User Management",
            path: "/accuterm/license-and-user-management/",
            collapsable: true,
            children: [
              ["/accuterm/license-and-user-management/creating-users/", "Creating Users"],
              ["/accuterm/license-and-user-management/creating-roles/", "Creating Roles"],
              ["/accuterm/license-and-user-management/batch-actions/", "Batch Actions"]
            ]
          },
          {
            title: "Desktop",
            path: "/accuterm/desktop/",
            collapsable: true,
            children: [
              ["/accuterm/desktop/gui/", "GUI"],
              ["/accuterm/desktop/rezume-session-resilience/", "ReZume Session Resilience"],
              ["/accuterm/desktop/installation/", "Installation"]
            ]
          },
          {
            title: "Mobile",
            path: "/accuterm/mobile/",
            collapsable: true,
            children: [
              ["/accuterm/mobile/quick-start/", "Quick Start"],
              ["/accuterm/mobile/colors-and-themes-settings/", "Colors & Themes Settings"],
              ["/accuterm/mobile/connection-settings/", "Connection Settings"],
              ["/accuterm/mobile/keyboard-and-clipboard-settings/", "Keyboard & Clipboard Settings"],
              ["/accuterm/mobile/screen-settings/", "Screen Settings"],
              ["/accuterm/mobile/terminal-settings/", "Terminal Settings"]
            ]
          },
          {
            title: "Web",
            path: "/accuterm/web/",
            collapsable: true,
            children: [
              ["/accuterm/web/installing-accuterm-io-server/", "Installing AccuTerm IO Server"],
              ["/accuterm/web/creating-profiles/", "Creating Profiles"],
              {
                title: "Profiles",
                path: "/accuterm/web/profiles/",
                collapsable: true,
                children: [
                  ["/accuterm/web/profiles/change-password/", "Change AccuTerm.IO Password"],
                  ["/accuterm/web/profiles/keyboard-options/", "Keyboard Options"],
                  ["/accuterm/web/profiles/mouse-settings/", "Mouse Settings"],
                  ["/accuterm/web/profiles/sound-settings/", "Sound Settings"],
                  ["/accuterm/web/profiles/terminal-screen-options/", "Terminal Screen Options"],
                  ["/accuterm/web/profiles/terminal-settings/", "Terminal Settings"],
                  ["/accuterm/web/profiles/clipboard-settings/", "Clipboard Settings"],
                  ["/accuterm/web/profiles/connection-settings/", "Connection Settings"],
                  ["/accuterm/web/profiles/font-and-character-settings/", "Font & Character Settings"]
                ]
              },
              {
                title: "GUI",
                path: "/accuterm/web/gui/",
                collapsable: true,
                children: [
                  ["/accuterm/web/gui/staging/", "Staging Updates"]
                ]
              }
            ]
          }
        ]
      },
      {
        title: "jBASE",
        path: "/jbase/",
        collapsable: true,
        children: [
          {
            title: "Getting Started",
            path: "/jbase/get-started",
            collapsable: true,
            children: [
              ["/jbase/overview/", "Overview"],
              ["/jbase/fundamentals/", "jBASE Fundamentals"],
              ["/jbase/cheat-sheets/", "jBASE Cheat Sheets"]
            ]
          },
          {
            title: "Installation",
            path: "/jbase/installation",
            collapsable: true,
            children: [
              ["/jbase/administration/installation-guides/linux/", "Linux"],
              ["/jbase/administration/installation-guides/windows/", "Windows"],
              ["/jbase/administration/installation-guides/aix/", "AIX"],
              ["/jbase/administration/installation-guides/upgrading/", "Upgrades"],
              ["/jbase/administration/installation-guides/licensing/", "Licensing"],
              ["/jbase/administration/installation-guides/platform-availability/", "Platform Availability"]
            ]
          },
          {
            title: "jBASE BASIC (jBC)",
            path: "/jbase/basic",
            collapsable: true,
            children: [
              ["/jbase/reference-guides/jbc/", "jBC"],
              ["/jbase/editors/", "Editors"],
              ["/jbase/dynamic-objects/", "Dynamic Objects"],
              ["/jbase/compilation/", "Compilation"],
              ["/jbase/jbc-runtime/", "Runtime"],
              ["/jbase/reference-guides/debugger/", "Debugger"],
              ["/jbase/jbc-error-handling/", "Error Handling"]
            ]
          },
          {
            title: "jBASE Query Language (jQL)",
            path: "/jbase/queries",
            collapsable: true,
            children: [
              ["/jbase/jql/", "jQL"],
              ["/jbase/lists/", "Lists"],
              ["/jbase/conversion-processing/", "Conversion Processing"]
            ]
          },
          {
            title: "jBASE Structured Query Language (jSQL)",
            path: "/jbase/jsql",
            collapsable: true,
            children: [
              ["/jbase/jsql/SQL/", "Using SQL with jBASE"],
              ["/jbase/connectivity/ODBC/", "ODBC"],
              ["/jbase/connectivity/jagent/jremote-api/", "jRemote API"]
            ]
          },
          {
            title: "jBASE Control Language (PROC)",
            path: "/jbase/jcl",
            collapsable: true,
            children: [
              ["/jbase/reference-guides/jcl/", "jCL"]
            ]
          },
          {
            title: "Indexes",
            path: "/jbase/indexes",
            collapsable: true,
            children: [
              ["/jbase/indexes/indexes/", "All about Indexes"]
            ]
          },
          {
            title: "Files",
            path: "/jbase/fileinfo",
            collapsable: true,
            children: [
              ["/jbase/faq/introduction-to-audit-logging/", "Audit Logging"],
              ["/jbase/encryption/", "Encryption"],
              ["/jbase/files/", "File Handling"],
              ["/jbase/coding-corner/introduction-to-distributed-locking/", "jDLS"],
              ["/jbase/jrfs/jrfs-quick-start-guide/", "jRFS"],
              ["/jbase/record-locking/", "jBASE Record Locking"],
              ["/jbase/triggers/triggers-overview/", "Triggers"]
            ]
          },
          {
            title: "jEDI",
            path: "/jbase/jedi",
            collapsable: true,
            children: [
              ["/jbase/jedi/mongodb/mongodb-jedi-driver/", "Mongo DB"],
              ["/jbase/jedi/odbc/introduction-to-the-odbc-jedi/", "ODBC"]
            ]
          },
          {
            title: "Transaction Journaling",
            path: "/jbase/transactions",
            collapsable: true,
            children: [
              ["/jbase/transactions/transaction-processing/", "Logging"],
              ["/jbase/transactions/transaction-replication/introduction-to-transaction-journaling/", "Replication"]
            ]
          },
          {
            title: "Connectivity",
            path: "/jbase/connectivity",
            collapsable: true,
            children: [
              ["/mv-connect/api/", "jAgent"],
              ["/jbase/connectivity/jrcs/", "jRCS"],
              ["/jbase/connectivity/ODBC/", "ODBC"],
              ["/jbase/faq/jcurl/", "jCurl"]
            ]
          },
          {
            title: "Spooler",
            path: "/jbase/spooler",
            collapsable: true,
            children: [
              ["/jbase/spooler/", "jBASE Spooler"]
            ]
          },
          {
            title: "Administration",
            path: "/jbase/administration",
            collapsable: true,
            children: [
              ["/jbase/accounts/", "Accounts"],
              ["/jbase/background-processing/", "Background Processing"],
              ["/jbase/faq/case-insensitive-overview/", "Case Insensitivty"],
              ["/jbase/daemons/", "Daemons"],
              ["/jbase/environment-variables/", "Environment Variables"],
              ["/jbase/internationalization/jbase-internationalization/", "Internationalization"],
              ["/jbase/faq/multitenancy/", "Multi-Tenancy"],
              ["/jbase/faq/profiles/jbase-profiles/", "Profiles"],
              ["/jbase/porting/migration-station/data-conversion/generic-data-conversion/", "Porting"],
              ["/jbase/administration/printers/", "Printers"],
              ["/jbase/terminal/terminal-support/", "Terminals"],
              ["/jbase/tape/tape-commands/", "Tape"],
              ["/jbase/tools-and-utilities/", "Tools and Utilities"]
            ]
          },
          {
            title: "Coding Corner",
            path: "/jbase/coding-corner",
            collapsable: true,
            children: [
              ["/jbase/coding-corner/", "Coding Corner"]
            ]
          },
          {
            title: "FAQ",
            path: "/jbase/faq",
            collapsable: true,
            children: [
              ["/jbase/faq/", "Frequently Asked Questions"]
            ]
          },
          {
            title: "Migration Station",
            path: "/jbase/porting/migration-station",
            collapsable: true,
            children: [
              ["/jbase/porting/migration-station/data-conversion/", "Data Conversion"]
            ]
          },
          {
            title: "Release Notes",
            path: "/jbase/release-notes",
            collapsable: true,
            children: [
              ["/jbase/release-notes/5.8/", "5.8.x"],
              ["/jbase/release-notes/5.7/", "5.7.x"],
              ["/jbase/release-notes/5.6/", "5.6.x"],
              ["/jbase/release-notes/5.5/5.5.1/", "5.5.x"]
            ]
          },
          {
            title: "Technical Support",
            path: "/jbase/technical-support",
            collapsable: true,
            children: [
              ["/jbase/technical-support/", "jBASE Technical Support"]
            ]
          }
        ]
      },
      {
        title: "POS Connect",
        path: "/pos-connect/",
        collapsable: true,
        children: [["/pos-connect/installation-guide/", "Installation Guide"]]
      },
      {
        title: "Rover",
        path: "/rover/",
        collapsable: true,
        children: [
          ["/rover/client-setup/", "Client Setup"],
          ["/rover/ACCOUNT-CONTROL/", "Account Control"],
          ["/rover/ACE-OVERVIEW/", "ACE Utilities"],
          ["/rover/AP-OVERVIEW/", "Accounts Payable"],
          ["/rover/DOC-OVERVIEW/", "Document Control"],
          ["/rover/ENG-OVERVIEW/", "Engineering"],
          ["/rover/EXEC-OVERVIEW/", "Executive Summary"],
          ["/rover/FS-OVERVIEW/", "Field Service"],
          ["/rover/GL-OVERVIEW/", "General Ledger"],
          ["/rover/INV-OVERVIEW/", "Inventory"],
          ["/rover/M3-Services/", "Services Setup"],
          ["/rover/MFG-OVERVIEW/", "Manufacturing Planning"],
          ["/rover/MRK-OVERVIEW/", "Marketing"],
          ["/rover/PRO-OVERVIEW/", "Production"],
          ["/rover/PROJ-OVERVIEW/", "Project Management"],
          ["/rover/PUR-OVERVIEW/", "Purchasing"]
        ]
      },
      {
        title: "Smart Suite",
        path: "/smartsuite/",
        collapsable: true,
        children: [
          ["/smartsuite/ap/accounts-payable-training/", "Accounts Payable"],
          ["/smartsuite/api/", "APIs"],
          ["/smartsuite/ar/ar-training/", "AR Training Guide"],
          {
            title: "Accounts Receivable",
            path: "/smartsuite/ar/",
            collapsable: true,
            children: [
              ["/smartsuite/ar/ar-general-ledger-interface/", "General Ledger Interface"],
              ["/smartsuite/ar/ar-history/", "Managing AR History"],
              ["/smartsuite/ar/creating-ar-agents/", "Create AR Agents"],
              ["/smartsuite/ar/create-ar-customer/", "Create AR Customers"]
            ]
          },
          {
            title: "General Ledger",
            path: "/smartsuite/gl/",
            collapsable: true,
            children: [
              ["/smartsuite/gl/general-ledger-pos-setup/", "GL POS Setup"],
              ["/smartsuite/gl/general-ledger-training/", "Training Document"],
              ["/smartsuite/gl/month-end-closing/", "EOM CLosing"]
            ]
          },
          {
            title: "General Merchandise",
            path: "/smartsuite/gm/",
            collapsable: true,
            children: [
              ["/smartsuite/gm/adding-gm-items-to-the-web/", "Add Items to Web"],
              ["/smartsuite/gm/adopt-gm-items/", "Adopt GM Items"],
              ["/smartsuite/gm/create-matrix-items/", "Create Matrix Items"],
              ["/smartsuite/gm/creating-a-purchase-order-with-new-matrix-items/", "Create PO With New Matrix Items"],
              ["/smartsuite/gm/creating-kits-or-bundles/", "Create Kits or Bundles"],
              ["/smartsuite/gm/general-merchandise-training-2/", "GM Training"],
              ["/smartsuite/gm/gm-merchandise-for-rush/", "Prepare for Rush"],
              ["/smartsuite/gm/gm-price-changes/", "Price Changes"],
              ["/smartsuite/gm/gm-promo-pricing/", "Promo Pricing"],
              ["/smartsuite/gm/gm-purchasing-guide/", "Purchasing Guide"],
              ["/smartsuite/gm/matrix-receiving/", "Matrix Receiving"],
              ["/smartsuite/gm/unkit/", "Unkit Kitted Items"]
            ]
          },
          {
            title: "Graphic Interface (GUI)",
            path: "/smartsuite/gui/",
            collapsable: true,
            children: [
              ["/smartsuite/gui/customer-gui-installation/", "Customer Install Instructions"],
              ["/smartsuite/gui/getting-a-report-into-excel/", "Export Report to Excel"]
            ]
          },
          {
            title: "Hardware",
            path: "/smartsuite/hardware/",
            collapsable: true,
            children: [
              ["/smartsuite/hardware/add-logo-to-receipt/", "Add Receipt Logo"],
              ["/smartsuite/hardware/scanpal-usage-guide/", "Scanpal User Guide"]
            ]
          },
          {
            title: "Point of Sale",
            path: "/smartsuite/pos/",
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
          ["/smartsuite/rsl/", "Retail Stock Ledger"],
          {
            title: "System Setup",
            path: "/smartsuite/system/",
            collapsable: true,
            children: [
              ["/smartsuite/system/background-processing/", "Background Processes"],
              ["/smartsuite/system/background-processing-reports/", "Background Reports"],
              ["/smartsuite/system/background-processing-self-hosted/", "Background Reports - Self Hosted"],
              ["/smartsuite/system/tcs-department-class-setup/", "Department and Class Setup"],
              ["/smartsuite/system/file-transfer-changes-and-setup/", "File Transfers"],
              ["/smartsuite/system/general-inventory-procedurs/", "General Inventory Procedures"],
              ["/smartsuite/system/inventory-procedures-tricoder/", "Inventory Procedures - Tricoder"],
              ["/smartsuite/system/set-or-reset-a-user-password/", "Set or Reset Password"],
              ["/smartsuite/system/tech-update/", "Tech Updates"],
              ["/smartsuite/system/how-to-customize-the-touch-screen/", "Touch Screen Layouts"],
              ["/smartsuite/system/upgrading-to-windows-10/", "Upgrade to Windows 10"]
            ]
          },
          {
            title: "Textbooks",
            path: "/smartsuite/text/",
            collapsable: true,
            children: [
              ["/smartsuite/text/adoption-import-file-specification/", "Adoption Import File Specs"],
              ["/smartsuite/text/advanced-faculty-adoptions-web-side/", "Advanced Faculty Adoptions - Web"],
              ["/smartsuite/web/advanced-faculty-adoptions-store-side/", "Advanced Faculty Adoptions - Store Side"],
              ["/smartsuite/text/auto-orders/", "Auto Orders"],
              ["/smartsuite/text/buyback-process/", "Buyback Process"],
              ["/smartsuite/text/buyback-setup/", "Buyback Setup"],
              ["/smartsuite/text/import-adoption-headers/", "Import Adoption Headers"],
              ["/smartsuite/text/manually-add-an-ebook/", "Manually Add An Ebook"],
              ["/smartsuite/text/print-adoption-forms/", "Print Adoption Forms"],
              ["/smartsuite/text/printing-adoption-forms/", "Printing Adoption Formsv2"],
              ["/smartsuite/text/receiving-process/", "Receiving PRocess"],
              ["/smartsuite/text/redshelf-adoption-export/", "Redshelf Adoption Export"],
              ["/smartsuite/text/redshelf-user-guide/", "Redshelf User Guide"],
              ["/smartsuite/text/rental-setup-and-training/", "Rental Setup and Training"],
              ["/smartsuite/text/returns-process/", "Returns Process"],
              ["/smartsuite/text/store-transfers/", "Store Transfers"],
              ["/smartsuite/text/textbook-training/", "Textbook Training"],
              ["/smartsuite/text/transfer-and-import-redshelf-catalog/", "Transfer and Import Redshelf Catalog"],
              ["/smartsuite/text/wholesale-guide-update/", "Wholesale Guide Update"]
            ]
          },
          {
            title: "Webstore",
            path: "/smartsuite/web/",
            collapsable: true,
            children: [
              ["/smartsuite/web/advanced-faculty-adoptions-store-side/", "Advanced Faculty Adoptions - Store Side"],
              ["/smartsuite/web/campus-webstore-parameters/", "Campus Webstore Parameters"],
              ["/smartsuite/web/legacy-faculty-adoptions-web-side/", "Legacy Faculty Adoptions - Web"],
              ["/smartsuite/web/SSO-with-azure-setup/", "SSO with Azure AD - Setup"]
            ]
          },
          ["/smartsuite/release-notes/", "Release Notes"]
        ]
      },
      {
        title: "TotaLink",
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
    editLinkText: "Help us improve this page!"
  }
};
