import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { ROLES, canAccessAdminDashboard, canManageInventory, canViewCustomerRecords } from '@/lib/roles';

export async function GET(request: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const role = (session.user as { role?: string }).role ?? 'customer';
  const isAdmin = canAccessAdminDashboard(role as any);
  const canManage = canManageInventory(role as any);
  const canView = canViewCustomerRecords(role as any);

  return NextResponse.json({
    authenticated: true,
    user: {
      email: session.user.email,
      role,
    },
    permissions: {
      adminDashboard: isAdmin,
      inventoryManagement: canManage,
      customerRecords: canView,
    },
    message: 'Demo session check. Replace with production database-backed authorization.',
  });
}

export async function POST(request: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = await request.json().catch(() => ({}));
  const role = (session.user as { role?: string }).role ?? 'customer';

  if (payload.action === 'grant-admin' && role !== ROLES.SUPER_ADMIN) {
    return NextResponse.json({ error: 'Forbidden: super admin required' }, { status: 403 });
  }

  return NextResponse.json({
    message: 'Demo admin action accepted.',
    userRole: role,
    action: payload.action ?? 'noop',
  });
}
