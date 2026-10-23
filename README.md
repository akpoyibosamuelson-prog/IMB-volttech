# VoltBiz

VoltBiz is an electrical services, inventory, and materials marketplace platform built for modern electrical business operations in Nigeria.

## Repository status

- Repository: akpoyibosamuelson-prog/IMB-volttech
- Branch: voltbiz-initial
- Initial state: empty repository aside from a placeholder README
- Current implementation: production-oriented Next.js foundation for the VoltBiz platform with a polished marketing homepage, demo service booking flow, marketplace browsing shell, admin/customer dashboard layouts, and app APIs

## Stack selected

- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: Next.js server routes and API layer
- Database: PostgreSQL with Prisma ORM (schema included)
- Auth: Auth.js / NextAuth-ready foundation
- Storage: S3-compatible or Supabase object storage
- Payments: Paystack / Flutterwave sandbox-ready design with server-side verification hooks
- Testing: Vitest + Playwright-ready structure for business logic and UI regression checks

## Current milestones

Completed:
- Project scaffold created
- Tailwind styling foundation added
- Homepage designed and implemented
- Login and registration screens created
- Booking page and demo submission flow created
- Marketplace page created
- Customer and admin dashboard shell created
- Demo API routes added for health, registration, login, and booking validation
- Prisma schema prepared for future database implementation

Pending / planned next:
- Real database migrations and seeded demo data
- Role-based server authorization and protection
- Secure file upload validation and storage
- Payment verification flow and webhook processing
- Inventory transaction safeguards and stock movement logic
- Notification and reporting features
- End-to-end tests and production hardening

## Setup

1. Install dependencies: npm install
2. Add environment variables in .env.local using .env.example as a template
3. Configure PostgreSQL and run Prisma migrations when ready
4. Run the app: npm run dev

## Security guidance

- Keep all secrets in environment variables
- Do not commit payment secrets or real credentials
- Use server-side validation before processing orders, payments, or access
- Keep customer-only records and financial data restricted to authorized roles
