// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'October CMS Docs',
    tagline: 'Documentatie voor het beheren van October CMS websites opgeleverd door Qteco',
    url: 'https://qteco-octobercms-docs.github.io',
    baseUrl: '/qteco-octobercms-docs.github.io/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'qteco',
    projectName: 'qteco-octobercms-docs.github.io',
    trailingSlash: false,

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'October CMS Docs',
                logo: {
                    alt: 'Qteco',
                    src: 'img/logo.svg',
                },
                items: [],
            },
            footer: {
                style: 'light',
                copyright: `&copy; ${new Date().getFullYear()} Qteco - <a href="https://docusaurus.io" target="_blank">Built with Docusaurus</a>`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
