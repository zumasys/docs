# Copilot Instructions for Zumasys Documentation

This repository contains the Zumasys product documentation built with VuePress. Help developers maintain high-quality documentation by following these guidelines.

## Repository Overview

This is a VuePress 1.x-based documentation site for Zumasys products including:
- **Rover Business Suite**: Comprehensive ERP system with modules for AP, AR, GL, Inventory, Manufacturing, etc.
- **POS Connect**: Point-of-sale integration solutions
- **SmartSuite**: Additional business management tools

The site is deployed as a static application on Azure Storage via GitHub Actions and is available at https://docs.zumasys.com.

## Technology Stack

- **VuePress 1.5.4**: Static site generator for documentation
- **Vue.js**: Frontend framework (used by VuePress)
- **JavaScript/TypeScript**: Primary languages for configuration and customization
- **Markdown**: Content format for all documentation
- **Node.js & npm**: Build toolchain
- **Azure Static Web Apps**: Deployment platform

## Directory Structure

```
├── .github/                    # GitHub workflows and configuration
│   └── workflows/             # CI/CD pipeline for Azure deployment
├── site/                      # Main documentation source
│   ├── .vuepress/            # VuePress configuration
│   │   ├── components/       # Vue components for documentation
│   │   ├── config.js         # Main VuePress configuration
│   │   ├── enhanceApp.js     # App-level enhancements
│   │   ├── public/           # Static assets (images, downloads)
│   │   ├── scripts/          # Build scripts
│   │   ├── styles/           # Custom CSS/Stylus styles
│   │   └── theme/            # Custom theme components
│   ├── pos-connect/          # POS Connect documentation
│   ├── rover/                # Rover Business Suite documentation
│   ├── smartsuite/           # SmartSuite documentation
│   ├── README.md             # Homepage content
│   └── package.json          # Dependencies and build scripts
├── CONTRIBUTING.md           # Documentation writing guidelines
└── README.md                # Repository overview
```

## Key Configuration Files

- `site/.vuepress/config.js`: Main VuePress configuration including plugins, theme settings, and build options
- `site/package.json`: Dependencies, scripts, and project metadata
- `.markdownlint.json`: Markdown linting rules
- `CONTRIBUTING.md`: Documentation writing standards and guidelines

## Development Workflow

### Local Development
1. Navigate to `site/` directory
2. Run `npm install` (first time only)
3. Set up environment variables in `.env` and `.env.development` (use `.env.skel` as template)
4. Run `npm run dev` to start development server at http://localhost:8080
5. Build with `npm run build` for production

### Content Guidelines

#### File Organization
- Each article should be in its own folder as `README.md`
- Place article-specific images in the same folder as the article
- Use descriptive folder names that match article topics
- Place downloadable files in `site/.vuepress/public/assets/downloads/`

#### Markdown Standards
- Use **exactly one** `#` heading per article
- Include `<PageHeader />` at the top and `<PageFooter />` at the bottom
- Use proper heading hierarchy (`##`, `###`, etc.) for subsections
- Enable line numbers in code blocks (configured globally)
- Use backticks for inline code and triple backticks for code blocks
- Format keywords in **bold** (e.g., **string**, **method**, **key**)
- Write URLs as proper Markdown links
- Use badge tags for categorization: `<badge text='category' vertical='middle' />`

#### Content Style
- Write in modern, professional tone (avoid ALL CAPS)
- Use Markdown syntax over HTML when possible
- Space out code examples for readability
- Remove trailing whitespace except for intentional line breaks (two spaces)
- Link back to parent pages where appropriate
- Include descriptive variable names and clear examples

#### VuePress-Specific Features
- Custom components available in `.vuepress/components/`
- Page header and footer components for consistent styling
- Reading progress and time estimation plugins
- Code copy functionality on code blocks
- Sitemap generation for SEO
- TypeScript support in Vue components and config

## Plugin Configuration

The site uses several VuePress plugins:
- `vuepress-plugin-code-copy`: Copy button on code blocks
- `vuepress-plugin-reading-time`: Reading time estimates
- `reading-progress`: Reading progress bar (enabled for Rover docs)
- `vuepress-plugin-sitemap`: SEO sitemap generation
- `vuepress-plugin-typescript`: TypeScript support
- `vuepress-plugin-nprogress`: Loading progress indicator

## Common Tasks

### Adding New Documentation
1. Create a new folder in the appropriate product directory (`rover/`, `pos-connect/`, `smartsuite/`)
2. Add `README.md` with proper headers and content structure
3. Include any necessary images in the same folder
4. Update navigation in `config.js` if needed
5. Test locally with `npm run dev`

### Modifying Theme or Styling
- Custom styles: `site/.vuepress/styles/`
- Theme components: `site/.vuepress/theme/`
- Global configuration: `site/.vuepress/config.js`

### Adding Static Assets
- Images for articles: Place in article folder
- Downloadable files: `site/.vuepress/public/assets/downloads/`
- Theme assets: `site/.vuepress/public/assets/`

## Code Quality Standards

- Follow existing code formatting and structure
- Use TypeScript for new Vue components when possible
- Maintain consistent indentation (2 spaces for JS/Vue, varies for Markdown)
- Follow markdownlint rules defined in `.markdownlint.json`
- Test all changes locally before committing
- Ensure responsive design for mobile and desktop

## Deployment

- Automatic deployment via GitHub Actions to Azure Static Web Apps
- Production URL: https://docs.zumasys.com
- Build artifacts are generated in `site/.vuepress/dist/`
- Environment variables required for full functionality (GitHub integration)

## Best Practices

1. **Always test locally** before pushing changes
2. **Follow the contribution guidelines** in CONTRIBUTING.md
3. **Use semantic folder and file names** that match content
4. **Maintain consistent documentation structure** across products
5. **Optimize images** for web use before adding to repository
6. **Keep dependencies up to date** but test thoroughly
7. **Write clear commit messages** describing documentation changes
8. **Consider SEO** when writing titles and descriptions

When making changes, focus on maintaining the existing architecture while improving content quality and user experience.