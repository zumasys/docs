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
              { link: "/rover/administration/", text: "Administration" },
              { link: "/rover/administration/client-setup/", text: "Client Setup" },
              { link: "/rover/administration/m3-services/", text: "M3 Services Setup" },
            ]
          },
          {
            text: "ACE Utilities",
            link: "/rover/ACE-OVERVIEW/",
            collapsible: true,
            children: [
              { link: "/rover/ACE-OVERVIEW/ACE-ENTRY/", text: "ACE Entry" },
              { link: "/rover/ACE-OVERVIEW/ACE-PROCESS/", text: "ACE Process" },
              { link: "/rover/ACE-OVERVIEW/ACE-REPORT/", text: "ACE Report" }]
          },
          {
            text: "Accounts Payable",
            link: "/rover/AP-OVERVIEW/",
            collapsible: true,
            children: [
              { link: "/rover/AP-OVERVIEW/AP-ENTRY/", text: "AP Entry" },
              { link: "/rover/AP-OVERVIEW/AP-PROCESS/", text: "AP Process" },
              { link: "/rover/AP-OVERVIEW/AP-REPORT/", text: "AP Report" }]
          },
          {
            text: "Accounts Receivable",
            link: "/rover/AR-OVERVIEW/",
            collapsible: true,
            children: [
              { link: "/rover/AR-OVERVIEW/AR-ENTRY/", text: "AR Entry" },
              { link: "/rover/AR-OVERVIEW/AR-PROCESS/", text: "AR Process" },
              { link: "/rover/AR-OVERVIEW/AR-REPORT/", text: "AR Report" }]
          },
          {
            text: "Document Control",
            link: "/rover/DOC-OVERVIEW/",
            collapsible: true,
            children: [
              { link: "/rover/DOC-OVERVIEW/DOC-ENTRY/", text: "DOC Entry" },
              { link: "/rover/DOC-OVERVIEW/DOC-PROCESS/", text: "DOC Process" },
              { link: "/rover/DOC-OVERVIEW/DOC-REPORT/", text: "DOC Report" },
              { link: "/rover/DOC-OVERVIEW/Doc-Control/", text: "DOC Control" }]
          },
          {
            text: "Engineering",
            link: "/rover/ENG-OVERVIEW/",
            collapsible: true,
            children: [
              { link: "/rover/ENG-OVERVIEW/ENG-ENTRY/", text: "ENG Entry" },
              { link: "/rover/ENG-OVERVIEW/ENG-PROCESS/", text: "ENG Process" },
              { link: "/rover/ENG-OVERVIEW/ENG-REPORT/", text: "ENG Report" }]
          },
          {
            text: "Executive Summary",
            link: "/rover/EXEC-OVERVIEW/",
            collapsible: true,
            children: [
              { link: "/rover/EXEC-OVERVIEW/EXEC-ENTRY/", text: "Executive Entry" },
              { link: "/rover/EXEC-OVERVIEW/EXEC-PROCESS/", text: "Executive Process" },
              { link: "/rover/EXEC-OVERVIEW/EXEC-REPORT/", text: "Executive Report" }]
          },
          {
            text: "Field Service",
            link: "/rover/FS-OVERVIEW/",
            collapsible: true,
            children: [
              { link: "/rover/FS-OVERVIEW/FS-ENTRY/", text: "Field Service Entry" },
              { link: "/rover/FS-OVERVIEW/FS-PROCESS/", text: "Field Service Process" },
              { link: "/rover/FS-OVERVIEW/FS-REPORT/", text: "Field Service Report" }]
          },
          {
            text: "General Ledger",
            link: "/rover/GL-OVERVIEW/",
            collapsible: true,
            children: [
              { link: "/rover/GL-OVERVIEW/GL-ACCOUNT-FLOW/", text: "GL Account Flow" },
              { link: "/rover/GL-OVERVIEW/GL-ENTRY/", text: "GL Entry" },
              { link: "/rover/GL-OVERVIEW/GL-PROCESS/", text: "GL Process" },
              { link: "/rover/GL-OVERVIEW/GL-REPORT/", text: "GL Report" }]
          },
          {
            text: "Inventory",
            link: "/rover/INV-OVERVIEW/",
            collapsible: true,
            children: [
              { link: "/rover/INV-OVERVIEW/INV-ENTRY/", text: "Inventory Entry" },
              { link: "/rover/INV-OVERVIEW/INV-PROCESS/", text: "Inventory Process" },
              { link: "/rover/INV-OVERVIEW/INV-REPORT/", text: "Inventory Report" }]
          },
          {
            text: "Manufacturing Planning",
            link: "/rover/MFG-OVERVIEW/",
            collapsible: true,
            children: [
              { link: "/rover/MFG-OVERVIEW/MFG-ENTRY/", text: "Manufacturing Entry" },
              { link: "/rover/MFG-OVERVIEW/MFG-PROCESS/", text: "Manufacturing Process" },
              { link: "/rover/MFG-OVERVIEW/MFG-REPORT/", text: "Manufacturing Report" }]
          },
          {
            text: "Marketing ",
            link: "/rover/MRK-OVERVIEW/",
            collapsible: true,
            children: [
              { link: "/rover/MRK-OVERVIEW/MRK-ENTRY/", text: "Marketing Entry" },
              { link: "/rover/MRK-OVERVIEW/MRK-PROCESS/", text: "Marketing Process" },
              { link: "/rover/MRK-OVERVIEW/MRK-REPORT/", text: "Marketing Report" }]
          },
          {
            text: "Production",
            link: "/rover/PRO-OVERVIEW/",
            collapsible: true,
            children: [
              { link: "/rover/PRO-OVERVIEW/PRO-ENTRY/", text: "Production Entry" },
              { link: "/rover/PRO-OVERVIEW/PRO-PROCESS/", text: "Production Process" },
              { link: "/rover/PRO-OVERVIEW/PRO-REPORT/", text: "Production Report" }]
          },
          { link: "/rover/PROJ-OVERVIEW/", text: "Project Management" },
          {
            text: "Purchasing",
            link: "/rover/PUR-OVERVIEW/",
            collapsible: true,
            children: [
              { link: "/rover/PUR-OVERVIEW/PUR-ENTRY/", text: "Purchasing Entry" },
              { link: "/rover/PUR-OVERVIEW/PUR-PROCESS/", text: "Purchasing Process" },
              { link: "/rover/PUR-OVERVIEW/PUR-REPORT/", text: "Purchasing Report" }
            ]
          },
          { link: "/rover/workflow-management/", text: "Workflow Management" }
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
