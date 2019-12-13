module.exports = {
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico" }]],
  title: "Beta Documentation",
  description: "New home for docs!",
  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10
      }
    ]
  ],
  themeConfig: {
    logo: "/assets/img/logo-grey.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/" },
      { text: "Old Docs", link: "https://docs.zumasys.com" }
    ],
    sidebar: [
      "/",
      ["/docs/", "Docs"],
      ["/docs/jbase/", "jBASE"],
      ["/docs/zumasys/AccuTerm Mobile/", "AccuTerm Mobile"],
      ["/docs/zumasys/AccuTerm Web/", "AccuTerm Web"],
      ["/docs/zumasys/Customer Portal/", "Customer Portal"],
      ["/docs/zumasys/Internal Applications/", "Internal Applications"],
      ["/docs/zumasys/MV Dashboard/", "MV Dashboard"],
      ["/docs/zumasys/MVConnect/", "MV Connect"]
    ],
    repo: "https://github.com/zumasys/docs",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    nextLinks: false,
    prevLinks: false,
    editLinkText: "Help us improve this page!"
  }
};
