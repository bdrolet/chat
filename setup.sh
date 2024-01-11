#!/bin/bash
docker run --name chat-postgres -p 5432:5432 -e POSTGRES_PASSWORD=password1 -d postgres
npx prisma migrate dev --name init
npm install @prisma/client 
npx prisma generate 