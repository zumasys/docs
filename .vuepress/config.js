module.exports = {
  title: "Beta Documentation",
  description: "New home for docs!",
  themeConfig: {
    logo: "/assets/img/logo-grey.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Old Docs", link: "https://docs.zumasys.com" }
    ],
    sidebar: ["/", ["/guide/", "Guide"]]
  }
};
