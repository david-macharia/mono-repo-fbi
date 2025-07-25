# 🐙 FBI Wanted - Local Setup (No Docker)

This guide explains how to run the **frontend (Vite + React)** and **backend (NestJS)** locally without using Docker.

---

## ⚠️ Prerequisite

Ensure you have **Node.js 20.x** installed  
Check version with:
```bash
node -v
```
🔧 Backend (NestJS + Prisma + SQLite)
```bash
cd fbi-wanted/fbi-wanted-api
npm install -g @nestjs/cli
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev

```
API runs at: http://localhost:3000

Swagger Docs: http://localhost:3000/docs
Frontend (Vite + React)
```bash
cd fbi-wanted-frontend
npm install
npm run start:dev
App will run at: http://localhost:5173