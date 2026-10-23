# VoltBiz

VoltBiz is a demo-first, production-ready business management platform for electrical service operations, vendor inventory, marketplace orders, and customer job tracking.

## Stack

- Next.js 14 + TypeScript + Tailwind CSS
- Prisma + PostgreSQL
- Auth.js / NextAuth for role-based authentication
- Paystack / Flutterwave-ready server verification
- Vercel-ready deployment configuration

## Current status

This repository currently contains the initial scaffold and a working demo experience with:

- responsive marketing homepage
- service booking form with validation and demo persistence
- marketplace catalog with shopping cart
- customer dashboard with recent data
- admin dashboard overview
- Prisma schema for production-ready data modeling
- health endpoint and sample demo data

## Important note

This is a demo-first implementation using browser localStorage for UI workflow simulation. The production database and authentication layers are modeled in Prisma and environment configuration files but are not yet connected to a live database in this repository state.

## Local development

1. Install dependencies
   npm install
2. Create a local env file
   cp .env.example .env.local
3. Run the app
   npm run dev
4. Open http://localhost:3000

## Production readiness roadmap

- configure PostgreSQL database
- add Auth.js and secure role enforcement
- implement server-side API for bookings, orders, and inventory
- connect file storage and email/WhatsApp providers
- create migration scripts and data seeding
- add production payment verification and webhook handling
- run typecheck, lint, and E2E tests
