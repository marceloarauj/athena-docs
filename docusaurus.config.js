// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Athena Docs',
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['pt'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
      },
    ],
  ],
  tagline: 'Documentação da API de Gerenciamento de Instituições - Athena Students Union',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-site.example.com',
  baseUrl: '/',

  organizationName: 'athena-students-union',
  projectName: 'institution-api-docs',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'Athena Students',
          src: 'img/logo.svg',
        },
        title: 'Athena Docs',
        items: [
          {
            type: 'dropdown',
            label: 'Institution API',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'institutionApiSidebar',
                label: 'Documentação',
              },
              {
                href: '/swagger/v1.json',
                label: 'swagger.json',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Identity API',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'identityApiSidebar',
                label: 'Documentação',
              },
              {
                href: '/swagger/identity-v1.json',
                label: 'swagger.json',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Institution API',
            items: [
              { label: 'Visão Geral', to: '/intro' },
              { label: 'Instituição', to: '/institution/create' },
              { label: 'Edições de Programa', to: '/program-editions/create' },
              { label: 'Professores', to: '/teachers/create' },
            ],
          },
          {
            title: 'Identity API',
            items: [
              { label: 'Visão Geral', to: '/identity-api/intro' },
              { label: 'Autenticação', to: '/identity-api/authentication/login' },
              { label: 'Registro', to: '/identity-api/register/register-user' },
              { label: 'Roles', to: '/identity-api/roles/create-role' },
            ],
          },
          {
            title: 'OpenAPI',
            items: [
              { label: 'Institution swagger.json', href: '/swagger/v1.json' },
              { label: 'Identity swagger.json', href: '/swagger/identity-v1.json' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Athena Students Union`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp', 'json', 'bash'],
      },
    }),
};

export default config;
