import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const APIS = [
  {
    id: 'institution',
    name: 'Institution API',
    tagline: 'Gerenciamento completo de instituições de ensino',
    badge: 'Porto :5000',
    swaggerHref: '/swagger/v1.json',
    introTo: '/intro',
    groups: [
      {
        icon: '🏛️',
        title: 'Instituição',
        description: 'Configure parâmetros e variáveis de avaliação.',
        link: '/institution/create',
        count: 3,
        tag: 'Core',
      },
      {
        icon: '📚',
        title: 'Programas Acadêmicos',
        description: 'Crie e consulte programas acadêmicos.',
        link: '/academic-programs/create',
        count: 3,
      },
      {
        icon: '👥',
        title: 'Turmas',
        description: 'Gerencie turmas e grupos de alunos.',
        link: '/classrooms/create',
        count: 4,
      },
      {
        icon: '👨‍🏫',
        title: 'Professores',
        description: 'Cadastre e consulte professores.',
        link: '/teachers/create',
        count: 5,
      },
      {
        icon: '📋',
        title: 'Edições de Programa',
        description: 'Matrículas, currículo, calendário, progressos e grade horária.',
        link: '/program-editions/create',
        count: '32+',
        tag: 'Principal',
      },
      {
        icon: '📅',
        title: 'Agenda e Aulas',
        description: 'Configure aulas, turnos, salas, disciplinas, eventos e feriados.',
        link: '/day-lessons/create',
        count: 12,
      },
    ],
  },
  {
    id: 'identity',
    name: 'Identity API',
    tagline: 'Identidade, autenticação e autorização via JWT + KeyCloak',
    badge: 'Porto :5216',
    swaggerHref: '/swagger/identity-v1.json',
    introTo: '/identity-api/intro',
    groups: [
      {
        icon: '🔑',
        title: 'Autenticação',
        description: 'Login via e-mail/senha. Retorna JWT enriquecido com claims de permissão.',
        link: '/identity-api/authentication/login',
        count: 1,
        tag: 'Pública',
      },
      {
        icon: '📝',
        title: 'Registro',
        description: 'Crie novos usuários vinculando-os a uma role.',
        link: '/identity-api/register/register-user',
        count: 1,
        tag: 'Pública',
      },
      {
        icon: '🛡️',
        title: 'Permissões',
        description: 'Liste, conceda ou revogue permissões do usuário autenticado.',
        link: '/identity-api/profile/get-permissions',
        count: 3,
      },
      {
        icon: '🎭',
        title: 'Roles',
        description: 'Crie perfis de acesso com conjuntos de permissões vinculadas.',
        link: '/identity-api/roles/create-role',
        count: 1,
      },
    ],
  },
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          API Documentation &nbsp;·&nbsp; Athena Students Union
        </div>
        <h1 className={styles.heroTitle}>
          Plataforma Athena
          <span className={styles.heroTitleLine}>Referência de APIs</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Documentação técnica das APIs REST da plataforma Athena Students Union — identidade,
          gerenciamento de instituições, programas acadêmicos e muito mais.
        </p>
      </div>
    </section>
  );
}

function GroupCard({ icon, title, description, link, count, tag }) {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{icon}</span>
        <div className={styles.cardMeta}>
          {tag && <span className={styles.cardTag}>{tag}</span>}
          <span className={styles.cardCount}>{count} endpoint{count !== 1 ? 's' : ''}</span>
        </div>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
      <span className={styles.cardCta}>Ver documentação →</span>
    </Link>
  );
}

function ApiSection({ id, name, tagline, badge, swaggerHref, introTo, groups }) {
  return (
    <section className={styles.apiSection}>
      <div className="container">
        <div className={styles.apiHeader}>
          <div className={styles.apiHeaderLeft}>
            <span className={styles.apiBadge}>{badge}</span>
            <h2 className={styles.apiName}>{name}</h2>
            <p className={styles.apiTagline}>{tagline}</p>
          </div>
          <div className={styles.apiHeaderRight}>
            <Link to={introTo} className={styles.apiLinkPrimary}>Visão geral</Link>
            <Link to={swaggerHref} className={styles.apiLinkGhost} target="_blank" rel="noopener noreferrer">swagger.json ↗</Link>
          </div>
        </div>
        <div className={styles.grid}>
          {groups.map((group, idx) => <GroupCard key={idx} {...group} />)}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <main>
        {APIS.map((api) => (
          <ApiSection key={api.id} {...api} />
        ))}
      </main>
    </Layout>
  );
}
