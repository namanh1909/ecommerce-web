import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '#',
      disabled: true,
    },
    {
      title: 'Support',
      href: '#',
    },
    {
      title: 'Another link',
      href: '#',
    },
  ],
  sidebarNav: [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: 'dashboard',
    },
    {
      title: 'Users',
      href: '/users',
      icon: 'user',
    },
    {
      title: 'Products',
      href: '/products',
      icon: 'product',
    },
    {
      title: 'Orders',
      href: '/orders',
      icon: 'order',
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: 'settings',
    },
  ],
};
