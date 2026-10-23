# VoltBiz

VoltBiz is an electrical services, inventory, and materials marketplace platform for Nigerian electrical businesses.

## Current repository status

The repository is being scaffolded with a production-friendly Next.js foundation. This initial implementation includes the public marketing site, customer/admin dashboard shells, demo booking flow, marketplace, and API routes.

## Recommended stack

- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: Next.js route handlers and API layer
- Database: PostgreSQL + Prisma ORM
- Auth: NextAuth-ready pattern with role-based enforcement
- Payments: Paystack or Flutterwave sandbox-ready verification flow
- Storage: S3-compatible or Supabase object storage

## Known limitations

- No persistent database has been configured yet
- Authentication is currently scaffolded and mock-based
- Real payment integration is not yet connected to a live provider
- Production hardening and tests remain pending

## Next implementation steps

1. Configure a real Postgres database and Prisma migrations
2. Add auth/session and authorization middleware
3. Add inventory transaction logic and stock movement tracking
4. Add secure upload and payment verification flows
5. Run build and validation checks
