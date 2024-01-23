export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: 'home',
    cName: 'nav-text',
  },
  {
    title: 'Pages',
    isGroupHeader: true,
    icon: 'favorite',
  },
  {
    title: 'Reports..',
    path: '/reports',
    icon: 'analytics',
    cName: 'nav-text',
    iconClosed: 'chevron_right',
    iconOpened: 'expand_more',
    subNav: [
      {
        title: 'Reports 1',
        path: '/reports/report1',
        icon: 'stacked_bar_chart',
        cName: 'nav-text',
      },
      {
        title: 'Reports 2',
        path: '/reports/report2',
        icon: 'stacked_bar_chart',
        cName: 'nav-text',
      },
      {
        title: 'Reports 3',
        path: '/reports/report3',
        icon: 'stacked_bar_chart',
        cName: 'nav-text',
      },
    ],
  },
  {
    title: 'Products',
    path: '/products',
    icon: 'inventory_2',
    cName: 'nav-text',
  },
  {
    title: 'Team',
    path: '/team',
    icon: 'groups',
    cName: 'nav-text',

    iconClosed: 'chevron_right',
    iconOpened: 'expand_more',
    subNav: [
      {
        title: 'Team 1',
        path: '/team/team1',
        icon: 'stacked_bar_chart',
        cName: 'nav-text',
      },
      {
        title: 'Team 2',
        path: '/team/team2',
        icon: 'stacked_bar_chart',
        cName: 'nav-text',
      },
      {
        title: 'Team 3',
        path: '/team/team3',
        icon: 'stacked_bar_chart',
        cName: 'nav-text',
      },
    ],
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: 'mail',
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/support',
    icon: 'build',
    cName: 'nav-text',
  },
];
