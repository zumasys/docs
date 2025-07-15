import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'


export default defineUserConfig({
  bundler: viteBundler(),
  head: [['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]],
  title: 'Product Documentation',
  description: 'Your home for Rover Business Suite product support and documentation.',
  define: { 'process.env': process.env },
  theme: defaultTheme({
    logo: "/assets/img/logo-grey.png",
    nav: [
      { text: "Home", link: "/" },
    ],
    sidebar: [
      "/",
      {
        text: "Rover ERP",
        link: "/rover/",
        collapsible: true,
        children: [
          {
            text: "Administration",
            link: "/rover/administration/",
            collapsible: true,
            children: [
              ["/rover/administration/", "Administration"],
              ["/rover/administration/client-setup/", "Client Setup"],
              ["/rover/administration/m3-services/", "M3 Services Setup"],
            ]
          },
          {
            text: "ACE Utilities",
            link: "/rover/ACE-OVERVIEW/",
            collapsible: true,
            children: [
              ["/rover/ACE-OVERVIEW/ACE-ENTRY/", "ACE Entry"],
              ["/rover/ACE-OVERVIEW/ACE-PROCESS/", "ACE Process"],
              ["/rover/ACE-OVERVIEW/ACE-REPORT/", "ACE Report"]]
          },
          {
            text: "Accounts Payable",
            link: "/rover/AP-OVERVIEW/",
            collapsible: true,
            children: [
              ["/rover/AP-OVERVIEW/AP-ENTRY/", "AP Entry"],
              ["/rover/AP-OVERVIEW/AP-PROCESS/", "AP Process"],
              ["/rover/AP-OVERVIEW/AP-REPORT/", "AP Report"]]
          },
          {
            text: "Accounts Receivable",
            link: "/rover/AR-OVERVIEW/",
            collapsible: true,
            children: [
              ["/rover/AR-OVERVIEW/AR-ENTRY/", "AR Entry"],
              ["/rover/AR-OVERVIEW/AR-PROCESS/", "AR Process"],
              ["/rover/AR-OVERVIEW/AR-REPORT/", "AR Report"]]
          },
          {
            text: "Document Control",
            link: "/rover/DOC-OVERVIEW/",
            collapsible: true,
            children: [
              ["/rover/DOC-OVERVIEW/DOC-ENTRY/", "DOC Entry"],
              ["/rover/DOC-OVERVIEW/DOC-PROCESS/", "DOC Process"],
              ["/rover/DOC-OVERVIEW/DOC-REPORT/", "DOC Report"],
              ["/rover/DOC-OVERVIEW/Doc-Control/", "DOC Control"]]
          },
          {
            text: "Engineering",
            link: "/rover/ENG-OVERVIEW/",
            collapsible: true,
            children: [
              ["/rover/ENG-OVERVIEW/ENG-ENTRY/", "ENG Entry"],
              ["/rover/ENG-OVERVIEW/ENG-PROCESS/", "ENG Process"],
              ["/rover/ENG-OVERVIEW/ENG-REPORT/", "ENG Report"]]
          },
          {
            text: "Executive Summary",
            link: "/rover/EXEC-OVERVIEW/",
            collapsible: true,
            children: [
              ["/rover/EXEC-OVERVIEW/EXEC-ENTRY/", "Executive Entry"],
              ["/rover/EXEC-OVERVIEW/EXEC-PROCESS/", "Executive Process"],
              ["/rover/EXEC-OVERVIEW/EXEC-REPORT/", "Executive Report"]]
          },
          {
            text: "Field Service",
            link: "/rover/FS-OVERVIEW/",
            collapsible: true,
            children: [
              ["/rover/FS-OVERVIEW/FS-ENTRY/", "Field Service Entry"],
              ["/rover/FS-OVERVIEW/FS-PROCESS/", "Field Service Process"],
              ["/rover/FS-OVERVIEW/FS-REPORT/", "Field Service Report"]]
          },
          {
            text: "General Ledger",
            link: "/rover/GL-OVERVIEW/",
            collapsible: true,
            children: [
              ["/rover/GL-OVERVIEW/GL-ACCOUNT-FLOW/", "GL Account Flow"],
              ["/rover/GL-OVERVIEW/GL-ENTRY/", "GL Entry"],
              ["/rover/GL-OVERVIEW/GL-PROCESS/", "GL Process"],
              ["/rover/GL-OVERVIEW/GL-REPORT/", "GL Report"]]
          },
          {
            text: "Inventory",
            link: "/rover/INV-OVERVIEW/",
            collapsible: true,
            children: [
              ["/rover/INV-OVERVIEW/INV-ENTRY/", "Inventory Entry"],
              ["/rover/INV-OVERVIEW/INV-PROCESS/", "Inventory Process"],
              ["/rover/INV-OVERVIEW/INV-REPORT/", "Inventory Report"]]
          },
          {
            text: "Manufacturing Planning",
            link: "/rover/MFG-OVERVIEW/",
            collapsible: true,
            children: [
              ["/rover/MFG-OVERVIEW/MFG-ENTRY/", "Manufacturing Entry"],
              ["/rover/MFG-OVERVIEW/MFG-PROCESS/", "Manufacturing Process"],
              ["/rover/MFG-OVERVIEW/MFG-REPORT/", "Manufacturing Report"]]
          },
          {
            text: "Marketing ",
            link: "/rover/MRK-OVERVIEW/",
            collapsible: true,
            children: [
              ["/rover/MRK-OVERVIEW/MRK-ENTRY/", "Marketing Entry"],
              ["/rover/MRK-OVERVIEW/MRK-PROCESS/", "Marketing Process"],
              ["/rover/MRK-OVERVIEW/MRK-REPORT/", "Marketing Report"]]
          },
          {
            text: "Production",
            link: "/rover/PRO-OVERVIEW/",
            collapsible: true,
            children: [
              ["/rover/PRO-OVERVIEW/PRO-ENTRY/", "Production Entry"],
              ["/rover/PRO-OVERVIEW/PRO-PROCESS/", "Production Process"],
              ["/rover/PRO-OVERVIEW/PRO-REPORT/", "Production Report"]]
          },
          ["/rover/PROJ-OVERVIEW/", "Project Management"],
          {
            text: "Purchasing",
            link: "/rover/PUR-OVERVIEW/",
            collapsible: true,
            children: [
              ["/rover/PUR-OVERVIEW/PUR-ENTRY/", "Purchasing Entry"],
              ["/rover/PUR-OVERVIEW/PUR-PROCESS/", "Purchasing Process"],
              ["/rover/PUR-OVERVIEW/PUR-REPORT/", "Purchasing Report"]]
          },
          ["/rover/workflow-management/", "Workflow Management"]
        ]
      },
      {
        text: "Rover POS",
        link: "/rover/business-suite/pos/",
      },
      {
        text: "Rover Pay",
        link: "/rover/business-suite/pay/",
      },
      {
        text: "Rover BI",
        link: "/rover/business-suite/bi/",
      },
      {
        text: "Rover Sales",
        link: "/rover/business-suite/sales/",
      },
      {
        text: "Rover Portal",
        link: "/rover/business-suite/portal/",
      },
      {
        text: "Rover Gateway",
        link: "/rover/business-suite/gateway/",
      },
      {
        text: "Release Notes",
        link: "/rover/release-notes/",
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
  })
})
