

# Skillex API

This is the backend API service for the **Skillex** project by Edgar Abrahamyan.

## Getting Started
---

### 1. Install Dependencies

npm install

### 2. Set .env by .env.example

### 3. Run migration

npm run migrate
||
PGPASSWORD=newpassword  psql -U postgres  -h localhost -d test_service_local -f src/db/migrations/schema.sql

### 4. Run Dev mode

npm run start:dev