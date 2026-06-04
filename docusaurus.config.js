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
        title: 'Athena Docs',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'institutionApiSidebar',
            position: 'left',
            label: 'Institution API',
          },
          {
            type: 'docSidebar',
            sidebarId: 'identityApiSidebar',
            position: 'left',
            label: 'Identity API',
          },
          {
            type: 'docSidebar',
            sidebarId: 'athenaAiSidebar',
            position: 'left',
            label: 'Athena AI',
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
            title: 'Athena AI',
            items: [
              { label: 'Visão Geral', to: '/athena-ai/intro' },
              { label: 'Chat · Assistant', to: '/athena-ai/chat/assistant' },
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
