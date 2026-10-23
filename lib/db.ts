import { auth } from '@/auth';
import { canAccessAdminDashboard, canManageInventory, canViewCustomerRecords } from '@/lib/roles';

export async function getSessionRole() {
  const session = await auth();
  return (session?.user as { role?: string } | undefined)?.role ?? 'customer';
}

export async function requireRole(expectedRoles: string[]) {
  const session = await auth();
  if (!session || !session.user) {
    return { allowed: false, reason: 'Unauthenticated' };
  }

  const role = (session.user as { role?: string }).role ?? 'customer';
  if (!expectedRoles.includes(role)) {
    return { allowed: false, reason: 'Forbidden' };
  }

  return { allowed: true, role };
}

export async function canAccessAdminPage() {
  const role = await getSessionRole();
  return canAccessAdminDashboard(role as any);
}

export async function canManageInventoryPage() {
  const role = await getSessionRole();
  return canManageInventory(role as any);
}

export async function canViewCustomerData() {
  const role = await getSessionRole();
  return canViewCustomerRecords(role as any);
}
