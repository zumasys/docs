# Zumasys Documentation

This is a [VuePress](https://vuepress.vuejs.org/) documentation application that leverages [GitHub](https://github.com) as the
repository of documentation. The repository is currently hosted in the [Zumasys GitHub](https://github.com/zumasys/docs) and the app
is available at [Zumasys BetaDocs](https://betadocs.zumasys.com). The documentation was created by way of
[HelpJuice-to-Markdown](https://github.com/itsxallwater/helpjuice-to-markdown).

## Directory structure

```text
├── site
│   ├── .vuepress
│   │   ├── components
│   │   ├── theme
│   │   ├── public
│   │   ├── styles
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── config.js
│   ├── docs
│   │   ├── jbase (Note: jBASE documentation lives here)
│   │   ├── zumasys (Note: Zumasys documentation lives here)
│   │   └── README.md
│   ├── README.md (Note: The home page of the docs)
│   └── package.json
└── README.md (Note: You are here!)
```

## Development Steps

To run the application locally:

1. `git clone https://github.com/zumasys/docs.git`
2. `cd site`
3. `npm install` (Not necessary on subsequent builds)
4. `npm run dev`
5. When compilation completes you should see the following message

   > success [12:25:41] Build 59cc58 finished in 75022 ms!  
   > VuePress dev server listening at [http://localhost:8080/](http://localhost:8080/)

6. Open [localhost:8080](localhost:8080) in your browser.

## TODO - Contributor Guidelines

## TODO - Community Guidelines

## TODO - Contributors

## Todo List

- [ ] Add sidebar links matching docs directory structure
- [ ] Clean up directory structure under the Zumasys folder (i.e. AccuTerm folder -> Mobile and Web)
- [x] Clean up root directory (move docs project into sub-dir)
- [ ] Add [Table of Contents](https://vuepress.vuejs.org/guide/markdown.html#table-of-contents)
- [ ] More [config](https://vuepress.vuejs.org/config/)
- [ ] More [theme config](https://vuepress.vuejs.org/theme/default-theme-config.html)
- [ ] More [customization](https://vuepress.vuejs.org/guide/markdown.html)
- [ ] Pull images from HelpJuice into static assets of this project and update links
- [ ] Add [Vssue](https://vssue.js.org/) plugin for comments
- [ ] Add [Google Analytics](https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html) plugin
- [ ] Add [Clean URLs](https://vuepress.github.io/en/plugins/clean-urls) plugin
- [ ] Add [Git Log](https://vuepress.github.io/en/plugins/git-log/) plugin
- [ ] Add [Algolia Search](https://community.algolia.com/docsearch/) plugin ([more docs](https://vuepress.vuejs.org/theme/default-theme-config.html#algolia-docsearch))
- [ ] Check out more on [awesome-vuepress](https://github.com/vuepressjs/awesome-vuepress)
- [ ] TBD
