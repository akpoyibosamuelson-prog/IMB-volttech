export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  BUSINESS_OWNER: 'business_owner',
  ELECTRICIAN: 'electrician',
  WHOLESALER: 'wholesaler',
  RETAILER: 'retailer',
  CUSTOMER: 'customer',
} as const;

export type AppRole = (typeof ROLES)[keyof typeof ROLES];

export function canAccessAdminDashboard(role: AppRole) {
  return [ROLES.SUPER_ADMIN, ROLES.BUSINESS_OWNER].includes(role);
}

export function canManageInventory(role: AppRole) {
  return [ROLES.SUPER_ADMIN, ROLES.BUSINESS_OWNER, ROLES.RETAILER, ROLES.WHOLESALER].includes(role);
}

export function canViewCustomerRecords(role: AppRole) {
  return [ROLES.SUPER_ADMIN, ROLES.BUSINESS_OWNER, ROLES.ELECTRICIAN].includes(role);
}
