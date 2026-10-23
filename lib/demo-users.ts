export type DemoUser = {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  role: 'SUPER_ADMIN' | 'BUSINESS_OWNER' | 'STAFF' | 'WHOLESALER' | 'RETAILER' | 'CUSTOMER';
};

import { hashPassword } from '@/lib/auth';

export const demoUsers: DemoUser[] = [
  {
    id: 'u-admin',
    email: 'admin@voltbiz.demo',
    name: 'Super Admin',
    passwordHash: hashPassword('Admin123!'),
    role: 'SUPER_ADMIN',
  },
  {
    id: 'u-owner',
    email: 'owner@voltbiz.demo',
    name: 'Business Owner',
    passwordHash: hashPassword('Owner123!'),
    role: 'BUSINESS_OWNER',
  },
  {
    id: 'u-customer',
    email: 'customer@voltbiz.demo',
    name: 'Customer User',
    passwordHash: hashPassword('Customer123!'),
    role: 'CUSTOMER',
  },
];

export function findUserByEmail(email: string) {
  return demoUsers.find((user) => user.email.toLowerCase() === email.toLowerCase());
}

export function findUserById(id: string) {
  return demoUsers.find((user) => user.id === id);
}
