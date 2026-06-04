// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  institutionApiSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Institution',
      items: [
        'institution/create',
        'institution/update',
        'institution/update-evaluation-variable',
      ],
    },
    {
      type: 'category',
      label: 'Programas Acadêmicos',
      items: [
        'academic-programs/create',
        'academic-programs/list',
        'academic-programs/get',
      ],
    },
    {
      type: 'category',
      label: 'Turmas (Classrooms)',
      items: [
        'classrooms/create',
        'classrooms/list',
        'classrooms/register-student',
        'classrooms/inactivate-student',
      ],
    },
    {
      type: 'category',
      label: 'Aulas do Dia',
      items: [
        'day-lessons/list',
        'day-lessons/update-attendance',
        'day-lessons/patch-student-attendance',
      ],
    },
    {
      type: 'category',
      label: 'Config. Grade de Aulas',
      items: [
        'day-lesson-schedule/create',
        'day-lesson-schedule/update',
        'day-lesson-schedule/list',
      ],
    },
    {
      type: 'category',
      label: 'Disciplinas',
      items: [
        'disciplines/create',
        'disciplines/update',
      ],
    },
    {
      type: 'category',
      label: 'Eventos',
      items: [
        'events/create',
        'events/list',
      ],
    },
    {
      type: 'category',
      label: 'Feriados e Recessos',
      items: [
        'holidays/create',
        'holidays/list',
        'holidays/delete',
        'holidays/create-recess',
        'holidays/list-recesses',
      ],
    },
    {
      type: 'category',
      label: 'Edições de Programa',
      items: [
        'program-editions/create',
        'program-editions/list',
        'program-editions/get',
        {
          type: 'category',
          label: 'Currículo',
          items: [
            'program-editions/curriculum/bulk-upsert',
            'program-editions/curriculum/upsert-entry',
            'program-editions/curriculum/list',
          ],
        },
        {
          type: 'category',
          label: 'Matrículas',
          items: [
            'program-editions/enrollment/enroll-student',
            'program-editions/enrollment/bulk-enroll',
            'program-editions/enrollment/list',
            'program-editions/enrollment/update-status',
          ],
        },
        {
          type: 'category',
          label: 'Períodos',
          items: [
            'program-editions/periods/generate',
            'program-editions/periods/create',
            'program-editions/periods/list',
          ],
        },
        {
          type: 'category',
          label: 'Calendário',
          items: [
            'program-editions/calendar/generate',
            'program-editions/calendar/get',
            'program-editions/calendar/summary',
          ],
        },
        {
          type: 'category',
          label: 'Progresso e Promoção',
          items: [
            'program-editions/progress/bulk-record',
            'program-editions/progress/record',
            'program-editions/progress/list',
            'program-editions/progress/promotion-preview',
            'program-editions/progress/run-promotion',
          ],
        },
        {
          type: 'category',
          label: 'Grupos de Aula',
          items: [
            'program-editions/class-groups/create',
            'program-editions/class-groups/generate',
            'program-editions/class-groups/assign-students',
            'program-editions/class-groups/list',
            'program-editions/class-groups/get',
          ],
        },
        {
          type: 'category',
          label: 'Grade Horária',
          items: [
            'program-editions/schedule/generate',
            'program-editions/schedule/class-group-schedule',
            'program-editions/schedule/teacher-schedule',
            'program-editions/schedule/conflict-detection',
            'program-editions/schedule/conflict-report',
            'program-editions/schedule/override-slot',
          ],
        },
        {
          type: 'category',
          label: 'Ciclo de Vida',
          items: [
            'program-editions/lifecycle/publish-checklist',
            'program-editions/lifecycle/publish',
            'program-editions/lifecycle/close',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Salas',
      items: [
        'rooms/create',
        'rooms/list',
      ],
    },
    {
      type: 'category',
      label: 'Turnos',
      items: [
        'shifts/create',
        'shifts/list',
        'shifts/add-slot',
        'shifts/list-slots',
      ],
    },
    {
      type: 'category',
      label: 'Matérias',
      items: [
        'subjects/create',
        'subjects/list',
      ],
    },
    {
      type: 'category',
      label: 'Professores',
      items: [
        'teachers/create',
        'teachers/list',
        'teachers/set-subjects',
        'teachers/set-availability',
        'teachers/get-availability',
      ],
    },
  ],

  athenaAiSidebar: [
    'athena-ai/intro',
    {
      type: 'category',
      label: 'Chat',
      items: ['athena-ai/chat/assistant'],
    },
  ],

  identityApiSidebar: [
    'identity-api/identity-api-intro',
    {
      type: 'category',
      label: 'Autenticação',
      items: ['identity-api/authentication/login'],
    },
    {
      type: 'category',
      label: 'Registro',
      items: ['identity-api/register/register-user'],
    },
    {
      type: 'category',
      label: 'Perfil',
      items: [
        'identity-api/profile/get-permissions',
        'identity-api/profile/grant-permission',
        'identity-api/profile/revoke-permission',
      ],
    },
    {
      type: 'category',
      label: 'Roles',
      items: ['identity-api/roles/create-role'],
    },
  ],
};

export default sidebars;
