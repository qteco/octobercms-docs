# October CMS Docs

Documentation website for Qteco-built October CMS websites, built with [Docusaurus v2](https://docusaurus.io).

### Installation

1. Clone the `develop` branch of this repository into your development environment.

**Note:** Always work in the `develop` branch. If you commit to the `main` branch, the changes will immediately be deployed to the production website.

**Note:** Never commit the `gh-pages` branch directly, this branch is used by GitHub Pages to host the production build of the documentation. The latest production build will automatically be committed to `gh-pages` during deployment.

2. Install the NPM dependencies:

```bash
npm install
```

### Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Generate production build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Test production build

```bash
npm run serve
```

This command starts a local production server and opens up a browser window to test the production build.

### Deployment

When you are happy with your changes, merge a pull request into the `main` branch and the website will automatically be deployed using GitHub Actions.
