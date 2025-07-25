
## 📸 Screenshot

![Screenshot of the app](Screenshot%202025-07-25%20at%2020.14.18.png)
# 🐙 FBI Wanted - Local Setup (No Docker)
clone and 
```bash 
cd mono-repo-fbi 
```

## Make sure you have redis running on 
 **at  '127.0.0.1', on port 6379 **

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
cd fbi-wanted-api
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
```
# 🐳 FBI Wanted - Monorepo Docker Setup

This guide walks you through running both the **frontend** and **backend** using Docker and Docker Compose.

---

## 📁 Folder Structure (Expected)
``` bash
fbi-wanted/
├── docker-compose.yml
├── fbi-wanted-api/ ← NestJS Backend
│ └── Dockerfile
├── fbi-wanted-frontend/ ← Vite + React Frontend
│ └── Dockerfile
```


---

## ⚙️ Prerequisites

- Docker installed → https://www.docker.com/products/docker-desktop
- Docker Compose v2+ (`docker compose version` should work)

---

## 🐳 1. Docker Compose Setup

### 📍 File: `fbi-wanted/docker-compose.yml`

```yaml
version: '3.8'

services:
  backend:
    container_name: fbi-backend
    build:
      context: ./fbi-wanted-api
    ports:
      - "3000:3000"
    volumes:
      - ./fbi-wanted-api:/app
      - /app/node_modules
    command: npm run start:dev
    environment:
      - NODE_ENV=development

  frontend:
    container_name: fbi-frontend
    build:
      context: ./fbi-wanted-frontend
    ports:
      - "5173:5173"
    volumes:
      - ./fbi-wanted-frontend:/app
      - /app/node_modules
    command: npm run dev
    environment:
      - NODE_ENV=development
      
```    
# Run Everything
Make sure ports 3000 and 5173 are free.
From the root of the project (fbi-wanted/), run:
```bash 
docker compose up --build
```
Access URLs
Frontend → http://localhost:5173

Backend → http://localhost:3000

Swagger Docs → http://localhost:3000/docs

