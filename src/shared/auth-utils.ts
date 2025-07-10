export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  permissions: string[];
  created_at: string;
  updated_at: string;
}

export const USER_ROLES = {
  ADMIN: 'admin',
  COORDINATOR: 'coordinator',
  VOLUNTEER: 'volunteer',
  HOST: 'host',
  DRIVER: 'driver',
  VIEWER: 'viewer'
} as const;

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];

export const PERMISSIONS = {
  // Data permissions
  VIEW_HOSTS: 'view_hosts',
  VIEW_RECIPIENTS: 'view_recipients',
  VIEW_DRIVERS: 'view_drivers',
  EDIT_DATA: 'edit_data',
  DELETE_DATA: 'delete_data',
  
  // Feature permissions
  VIEW_MEETINGS: 'view_meetings',
  VIEW_ANALYTICS: 'view_analytics',
  VIEW_REPORTS: 'view_reports',
  VIEW_PROJECTS: 'view_projects',
  VIEW_COMMITTEE: 'view_committee',
  
  // Admin permissions
  MANAGE_USERS: 'manage_users',
  SYSTEM_ADMIN: 'system_admin',
  
  // Communication permissions
  SEND_MESSAGES: 'send_messages',
  MODERATE_MESSAGES: 'moderate_messages',
} as const;

export type Permission = typeof PERMISSIONS[keyof typeof PERMISSIONS];

export const getDefaultPermissionsForRole = (role: UserRole): Permission[] => {
  switch (role) {
    case USER_ROLES.ADMIN:
      return Object.values(PERMISSIONS);
    case USER_ROLES.COORDINATOR:
      return [
        PERMISSIONS.VIEW_HOSTS,
        PERMISSIONS.VIEW_RECIPIENTS,
        PERMISSIONS.VIEW_DRIVERS,
        PERMISSIONS.EDIT_DATA,
        PERMISSIONS.VIEW_MEETINGS,
        PERMISSIONS.VIEW_ANALYTICS,
        PERMISSIONS.VIEW_REPORTS,
        PERMISSIONS.VIEW_PROJECTS,
        PERMISSIONS.VIEW_COMMITTEE,
        PERMISSIONS.SEND_MESSAGES,
        PERMISSIONS.MODERATE_MESSAGES,
      ];
    case USER_ROLES.VOLUNTEER:
      return [
        PERMISSIONS.VIEW_HOSTS,
        PERMISSIONS.VIEW_RECIPIENTS,
        PERMISSIONS.VIEW_DRIVERS,
        PERMISSIONS.VIEW_MEETINGS,
        PERMISSIONS.VIEW_PROJECTS,
        PERMISSIONS.SEND_MESSAGES,
      ];
    case USER_ROLES.HOST:
      return [
        PERMISSIONS.VIEW_DRIVERS,
        PERMISSIONS.VIEW_MEETINGS,
        PERMISSIONS.SEND_MESSAGES,
      ];
    case USER_ROLES.DRIVER:
      return [
        PERMISSIONS.VIEW_HOSTS,
        PERMISSIONS.VIEW_RECIPIENTS,
        PERMISSIONS.VIEW_MEETINGS,
        PERMISSIONS.SEND_MESSAGES,
      ];
    case USER_ROLES.VIEWER:
      return [
        PERMISSIONS.VIEW_ANALYTICS,
        PERMISSIONS.VIEW_REPORTS,
      ];
    default:
      return [];
  }
};

export const getRoleDisplayName = (role: UserRole): string => {
  switch (role) {
    case USER_ROLES.ADMIN:
      return 'Administrator';
    case USER_ROLES.COORDINATOR:
      return 'Coordinator';
    case USER_ROLES.VOLUNTEER:
      return 'Volunteer';
    case USER_ROLES.HOST:
      return 'Host';
    case USER_ROLES.DRIVER:
      return 'Driver';
    case USER_ROLES.VIEWER:
      return 'Viewer';
    default:
      return 'Unknown';
  }
};

export const hasPermission = (user: User | null, permission: Permission): boolean => {
  if (!user) return false;
  return user.permissions.includes(permission);
};

export const hasAnyPermission = (user: User | null, permissions: Permission[]): boolean => {
  if (!user) return false;
  return permissions.some(permission => user.permissions.includes(permission));
};

export const hasAllPermissions = (user: User | null, permissions: Permission[]): boolean => {
  if (!user) return false;
  return permissions.every(permission => user.permissions.includes(permission));
};
