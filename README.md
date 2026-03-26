# Zumasys Documentation

[![Azure Static Web Apps CI/CD](https://github.com/zumasys/docs/actions/workflows/azure-static-web-apps-calm-tree-0410ef410.yml/badge.svg)](https://github.com/zumasys/docs/actions/workflows/azure-static-web-apps-calm-tree-0410ef410.yml)

This is a [VitePress](https://vitepress.dev/) documentation application that leverages [GitHub](https://github.com) as the repository of documentation. The repository is currently hosted in the [Zumasys GitHub](https://github.com/zumasys/docs) and the app is available at [Zumasys Docs](https://docs.zumasys.com). The application itself is built and deployed as a static site hosted on Azure Storage via a GitHub action.

## Directory structure

```text
├── site
│   ├── .vitepress
│   │   ├── config.ts
│   │   └── dist          (build output, git-ignored)
│   ├── public
│   │   └── assets
│   │       ├── downloads
│   │       └── img
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

   > vitepress v1.x.x  
   > ➜  Local:   http://localhost:5173/

7. Open [localhost:5173](http://localhost:5173) in your browser.

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

* [ ] Review and migrate any custom VitePress theme components as needed
* [ ] Update 404 page to have featured content
