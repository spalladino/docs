// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Noir Documentation',
  tagline: 'The Universal ZK Circuit Language',
  favicon: 'img/favicon.ico',
  url: 'https://noir-lang.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
//         gtag: {
//           trackingID: 'G-SZQHEQZK3L',
//           anonymizeIP: true,
//         },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          versions: {
            current: {
              label: 'dev',
              path: 'dev',
            },
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        logo: {
          alt: 'Noir Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logoDark.svg',
          href: '/',
        },
        items: [
          {
            href: 'https://github.com/noir-lang/docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      metadata: [
        {
          name: 'Noir',
          content:
            'noir, programming, language, documentation, zk, zero-knowledge, l2, crypto, layer2, ethereum',
        },
      ],
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/aztec',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/NoirLang',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/noir-lang/docs',
              },
            ],
          },
        ],
        copyright: `Noir will be dual licensed under MIT/Apache (Version 2.0).`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust'],
      },
      stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
        },
      ],
      algolia: {
        // The application ID provided by Algolia
        appId: '97APAVUL6H',

        // Public API key: it is safe to commit it
        apiKey: '8cdbbd8b0b98caab7765766267b1cb23',

        indexName: 'noir-lang',
      },
    }),
};

module.exports = config;
