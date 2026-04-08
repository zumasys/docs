import { defineConfig } from 'vitepress'
import { join } from 'path'
import { readFileSync } from 'fs'

export default defineConfig({
  title: 'Rover Data',
  description: 'Your home for Rover product support and documentation.',
  ignoreDeadLinks: true,
  head: [['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]],
  markdown: {
    lineNumbers: true,
  },
  transformPageData(pageData, ctx) {
    try {
      const filePath = join(ctx.siteConfig.root, pageData.relativePath)
      const src = readFileSync(filePath, 'utf-8')
      // Strip frontmatter, code blocks, inline code, images, and HTML tags
      const text = src
        .replace(/^---[\s\S]*?---\n?/, '')
        .replace(/```[\s\S]*?```/g, '')
        .replace(/`[^`]*`/g, '')
        .replace(/!\[.*?\]\(.*?\)/g, '')
        .replace(/<[^>]+>/g, '')
      const words = text.trim().split(/\s+/).filter((w: string) => w.length > 0).length
      pageData.frontmatter.readingTime = Math.max(1, Math.ceil(words / 200))
    } catch {
      // non-critical — skip if file can't be read
    }
  },
  themeConfig: {
    logo: '/assets/img/logo-grey.png',
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      { text: 'Home', link: '/' },
      {
        text: 'Rover ERP',
        link: '/rover/',
        collapsed: true,
        items: [
          {
            text: 'Administration',
            link: '/rover/administration/',
            collapsed: true,
            items: [
              { text: 'Administration', link: '/rover/administration/' },
              { text: 'Client Setup', link: '/rover/administration/client-setup/' },
              { text: 'M3 Services Setup', link: '/rover/administration/m3-services/' },
            ],
          },
          {
            text: 'ACE Utilities',
            link: '/rover/ACE-OVERVIEW/',
            collapsed: true,
            items: [
              { text: 'ACE Entry', link: '/rover/ACE-OVERVIEW/ACE-ENTRY/' },
              { text: 'ACE Process', link: '/rover/ACE-OVERVIEW/ACE-PROCESS/' },
              { text: 'ACE Report', link: '/rover/ACE-OVERVIEW/ACE-REPORT/' },
            ],
          },
          {
            text: 'Accounts Payable',
            link: '/rover/AP-OVERVIEW/',
            collapsed: true,
            items: [
              { text: 'AP Entry', link: '/rover/AP-OVERVIEW/AP-ENTRY/' },
              { text: 'AP Process', link: '/rover/AP-OVERVIEW/AP-PROCESS/' },
              { text: 'AP Report', link: '/rover/AP-OVERVIEW/AP-REPORT/' },
            ],
          },
          {
            text: 'Accounts Receivable',
            link: '/rover/AR-OVERVIEW/',
            collapsed: true,
            items: [
              { text: 'AR Entry', link: '/rover/AR-OVERVIEW/AR-ENTRY/' },
              { text: 'AR Process', link: '/rover/AR-OVERVIEW/AR-PROCESS/' },
              { text: 'AR Report', link: '/rover/AR-OVERVIEW/AR-REPORT/' },
            ],
          },
          {
            text: 'Document Control',
            link: '/rover/DOC-OVERVIEW/',
            collapsed: true,
            items: [
              { text: 'DOC Entry', link: '/rover/DOC-OVERVIEW/DOC-ENTRY/' },
              { text: 'DOC Report', link: '/rover/DOC-OVERVIEW/DOC-REPORT/' },
            ],
          },
          {
            text: 'Engineering',
            link: '/rover/ENG-OVERVIEW/',
            collapsed: true,
            items: [
              { text: 'ENG Entry', link: '/rover/ENG-OVERVIEW/ENG-ENTRY/' },
              { text: 'ENG Process', link: '/rover/ENG-OVERVIEW/ENG-PROCESS/' },
              { text: 'ENG Report', link: '/rover/ENG-OVERVIEW/ENG-REPORT/' },
            ],
          },
          {
            text: 'Executive Summary',
            link: '/rover/EXEC-OVERVIEW/',
            collapsed: true,
            items: [
              { text: 'Executive Entry', link: '/rover/EXEC-OVERVIEW/EXEC-ENTRY/' },
              { text: 'Executive Process', link: '/rover/EXEC-OVERVIEW/EXEC-PROCESS/' },
              { text: 'Executive Report', link: '/rover/EXEC-OVERVIEW/EXEC-REPORT/' },
            ],
          },
          {
            text: 'Field Service',
            link: '/rover/FS-OVERVIEW/',
            collapsed: true,
            items: [
              { text: 'Field Service Entry', link: '/rover/FS-OVERVIEW/FS-ENTRY/' },
              { text: 'Field Service Process', link: '/rover/FS-OVERVIEW/FS-PROCESS/' },
              { text: 'Field Service Report', link: '/rover/FS-OVERVIEW/FS-REPORT/' },
            ],
          },
          {
            text: 'General Ledger',
            link: '/rover/GL-OVERVIEW/',
            collapsed: true,
            items: [
              { text: 'GL Account Flow', link: '/rover/GL-OVERVIEW/GL-ACCOUNT-FLOW/' },
              { text: 'GL Entry', link: '/rover/GL-OVERVIEW/GL-ENTRY/' },
              { text: 'GL Process', link: '/rover/GL-OVERVIEW/GL-PROCESS/' },
              { text: 'GL Report', link: '/rover/GL-OVERVIEW/GL-REPORT/' },
            ],
          },
          {
            text: 'Inventory',
            link: '/rover/INV-OVERVIEW/',
            collapsed: true,
            items: [
              { text: 'Inventory Entry', link: '/rover/INV-OVERVIEW/INV-ENTRY/' },
              { text: 'Inventory Process', link: '/rover/INV-OVERVIEW/INV-PROCESS/' },
              { text: 'Inventory Report', link: '/rover/INV-OVERVIEW/INV-REPORT/' },
            ],
          },
          {
            text: 'Manufacturing Planning',
            link: '/rover/MFG-OVERVIEW/',
            collapsed: true,
            items: [
              { text: 'Manufacturing Entry', link: '/rover/MFG-OVERVIEW/MFG-ENTRY/' },
              { text: 'Manufacturing Process', link: '/rover/MFG-OVERVIEW/MFG-PROCESS/' },
              { text: 'Manufacturing Report', link: '/rover/MFG-OVERVIEW/MFG-REPORT/' },
            ],
          },
          {
            text: 'Marketing',
            link: '/rover/MRK-OVERVIEW/',
            collapsed: true,
            items: [
              { text: 'Marketing Entry', link: '/rover/MRK-OVERVIEW/MRK-ENTRY/' },
              { text: 'Marketing Process', link: '/rover/MRK-OVERVIEW/MRK-PROCESS/' },
              { text: 'Marketing Report', link: '/rover/MRK-OVERVIEW/MRK-REPORT/' },
            ],
          },
          {
            text: 'Production',
            link: '/rover/PRO-OVERVIEW/',
            collapsed: true,
            items: [
              { text: 'Production Entry', link: '/rover/PRO-OVERVIEW/PRO-ENTRY/' },
              { text: 'Production Process', link: '/rover/PRO-OVERVIEW/PRO-PROCESS/' },
              { text: 'Production Report', link: '/rover/PRO-OVERVIEW/PRO-REPORT/' },
            ],
          },
          { text: 'Project Management', link: '/rover/PROJ-OVERVIEW/' },
          {
            text: 'Purchasing',
            link: '/rover/PUR-OVERVIEW/',
            collapsed: true,
            items: [
              { text: 'Purchasing Entry', link: '/rover/PUR-OVERVIEW/PUR-ENTRY/' },
              { text: 'Purchasing Process', link: '/rover/PUR-OVERVIEW/PUR-PROCESS/' },
              { text: 'Purchasing Report', link: '/rover/PUR-OVERVIEW/PUR-REPORT/' },
            ],
          },
          { text: 'Workflow Management', link: '/rover/workflow-management/' },
          { text: 'KB Articles', link: '/rover/KB-Articles/' },
        ],
      },
      { text: 'Rover POS', link: '/rover/business-suite/pos/' },
      { text: 'Rover Pay', link: '/rover/business-suite/pay/' },
      { text: 'Rover BI', link: '/rover/business-suite/bi/' },
      { text: 'Rover Sales', link: '/rover/business-suite/sales/' },
      { text: 'Rover Portal', link: '/rover/business-suite/portal/' },
      { text: 'Rover Gateway', link: '/rover/business-suite/gateway/' },
      { text: 'Release Notes', link: '/rover/release-notes/' },
    ],
    editLink: {
      pattern: 'https://github.com/zumasys/docs/edit/master/site/:path',
      text: 'Help us improve this page!',
    },
    lastUpdated: {
      text: 'Last Updated',
    },
    search: {
      provider: 'local',
    },
  },
})
