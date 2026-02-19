# Database Schema for Multi-Vendor E-Commerce Platform

## Users
- id (PK)
- name
- email (unique)
- password
- role (enum: BUYER, SELLER)
- createdAt
- updatedAt

## Products
- id (PK)
- name
- description
- price
- category (enum: BUILDING_MATERIALS, CLOTHING_ACCESSORIES, CAR_PARTS, PHONE_ACCESSORIES, PHONE_PARTS)
- subcategory (string)
- stock
- images (string[])
- sellerId (FK → Users.id)
- createdAt
- updatedAt

## Orders
- id (PK)
- buyerId (FK → Users.id)
- status (enum: PENDING, PAID, SHIPPED, DELIVERED, CANCELLED)
- total
- createdAt
- updatedAt

## OrderItems
- id (PK)
- orderId (FK → Orders.id)
- productId (FK → Products.id)
- quantity
- price

## Invoices
- id (PK)
- orderId (FK → Orders.id)
- sellerId (FK → Users.id)
- buyerId (FK → Users.id)
- date
- total
- tax
- status (enum: PAID, UNPAID, CANCELLED)

## SupportTickets
- id (PK)
- orderId (FK → Orders.id, nullable)
- buyerId (FK → Users.id)
- sellerId (FK → Users.id, nullable)
- subject
- message
- status (enum: OPEN, CLOSED, PENDING)
- createdAt
- updatedAt

---

# Folder Structure (Next.js App Router, Prisma, NextAuth)

```
/ (root)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── buyer/
│   │   │   ├── profile/
│   │   │   ├── cart/
│   │   │   ├── orders/
│   │   │   ├── support/
│   │   │   └── invoices/
│   │   ├── seller/
│   │   │   ├── dashboard/
│   │   │   ├── products/
│   │   │   ├── orders/
│   │   │   ├── invoices/
│   │   │   ├── bulk-import/
│   │   │   └── support/
│   │   ├── api/
│   │   │   ├── auth/[...nextauth].ts
│   │   │   ├── products/
│   │   │   ├── orders/
│   │   │   ├── invoices/
│   │   │   └── support/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── ProductCard.tsx
│   ├── lib/
│   │   ├── prisma.ts
│   │   └── utils/
│   ├── styles/
│   │   └── globals.css
│   ├── prisma/
│   │   └── schema.prisma
├── .env
├── package.json
├── README.md
└── ...
```

- All business logic and API endpoints are under `src/app/api/`.
- Role-based pages are under `src/app/buyer/` and `src/app/seller/`.
- Shared UI components are in `src/components/`.
- Prisma schema and DB logic in `src/prisma/` and `src/lib/`.
- NextAuth config in `src/app/api/auth/[...nextauth].ts`.
