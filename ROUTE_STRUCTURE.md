# Route Structure Explanation

## Seller Routes
- `/seller/dashboard` — Seller dashboard overview
- `/seller/products` — Manage (CRUD) products
- `/seller/bulk-import` — Bulk import products via CSV
- `/seller/orders` — View and manage received orders
- `/seller/invoices` — View and generate invoices
- `/seller/support` — Support ticket system for sellers

## Buyer Routes
- `/buyer/profile` — Manage profile and addresses
- `/buyer/cart` — Shopping cart
- `/buyer/orders` — Order history
- `/buyer/invoices` — List and view invoices
- `/buyer/support` — Support ticket system for buyers

## Shared
- `/invoices/[id]` — Dynamic route for invoice details
- `/support/[ticketId]` — Dynamic route for support ticket details

## API Endpoints (Express)
- `/api/auth/*` — Authentication (login, register, etc.)
- `/api/products/*` — Product CRUD and listing
- `/api/orders/*` — Order management
- `/api/invoices/*` — Invoice management
- `/api/support/*` — Support ticket system
