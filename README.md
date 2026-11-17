# OrganizingFair Logistics Ltd

Marketing site for freight forwarding, customs clearing, and container haulage, with a quote form stored in Neon Postgres via Prisma.

## Setup

1. Copy environment variables:

   ```bash
   copy .env.example .env
   ```

2. In `.env`, paste your Neon `DATABASE_URL` and set `ADMIN_PASSWORD`.

3. Install dependencies and apply the database schema:

   ```bash
   npm install
   npx prisma migrate deploy
   ```

4. Start the app:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) for the public site and [http://localhost:3000/admin/login](http://localhost:3000/admin/login) for the quote inbox.
