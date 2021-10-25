# October CMS Docs

Documentation website for Qteco-built October CMS websites, built with [Docusaurus v2](https://docusaurus.io).

### Installation

1. Clone the `main` branch of this repository into your development environment.
   **Note:** Never touch the `gh-pages` branch manually, this branch is used by GitHub Pages to display the production build of the documentation. The latest production build will automatically be committed to `gh-pages` when you deploy.
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

This command serves and opens up a browser window to test the production build.

### Deployment

1. Generate a personal access token with the `repo` scope enabled, and keep it somewhere safe: https://github.com/settings/tokens/new?scopes=repo
2. Deploy the website with the following command:

```
set GIT_USER=<your GitHub username>&& set CURRENT_BRANCH=main&& set DEPLOYMENT_BRANCH=gh-pages&& npm run deploy
```

3. You will be prompted for a password, do not enter your GitHub password but enter your personal access token instead.
