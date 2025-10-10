# Zumasys Documentation

[![Azure Static Web Apps CI/CD](https://github.com/zumasys/docs/actions/workflows/azure-static-web-apps-calm-tree-0410ef410.yml/badge.svg)](https://github.com/zumasys/docs/actions/workflows/azure-static-web-apps-calm-tree-0410ef410.yml)

This is a [VuePress](https://vuepress.vuejs.org/) documentation application that leverages [GitHub](https://github.com) as the repository of documentation. The repository is currently hosted in the [Zumasys GitHub](https://github.com/zumasys/docs) and the app is available at [Zumasys Docs](https://docs.zumasys.com). The application itself is built and deployed as a static site hosted on Azure Storage via a GitHub action.

## Directory structure

```text
├── site
│   ├── .vuepress
│   │   ├── components
│   │   ├── dist
│   │   ├── public
│   │   ├── styles
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── theme
│   │   │   ├── components
│   │   │   ├── layouts
│   │   │   └── index.js
│   │   ├── config.js
│   │   ├── enhanceApp.js
│   ├── pos-connect (POS Connect docs)
│   ├── rover (Rover docs)
│   ├── smartsuite (SmartSuite docs)
│   ├── README.md (The home page of the docs)
│   └── package.json
└── README.md (You are here!)
```

## Development Steps

To run the application locally:

> You will need to have [Node.js & npm](https://nodejs.org/en/download/) installed. You'll also need [Git](https://git-scm.com/downloads).

1. `git clone https://github.com/zumasys/docs.git`
2. `cd docs` (or whatever name you used for your git clone)
3. `cd site`
4. `npm i` (Not necessary on subsequent builds)
5. `npm run dev`
6. When compilation completes you should see the following message

   > success [12:25:41] Build 59cc58 finished in 75022 ms!  
   > VuePress dev server listening at [http://localhost:8080/](http://localhost:8080/)

7. Open [localhost:8080](localhost:8080) in your browser.

## Maintenance Tools

### Link Validation

A Node.js script is available to validate all markdown links in the documentation. This helps ensure that:

* All links point to existing files/directories
* Links to directories end with `/README.md`
* No broken links exist after file reorganization

To run the link validator:

```bash
cd site
npm run validate-links
```

See [scripts/README.md](scripts/README.md) for more details.

## Todo List

* [ ] Migrate to VuePress 2
* [ ] Review Plugins (related to migration)
* [ ] Check out more on [awesome-vuepress](https://github.com/vuepressjs/awesome-vuepress)
* [ ] Update 404 page to have featured content
