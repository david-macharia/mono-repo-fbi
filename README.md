 Step-by-Step Monorepo Docker Setup
📁 Assumes your structure is:

mathematica
Copy
Edit
fbi-wanted/
├── docker-compose.yml        ✅ Root file
├── fbi-wanted-api/           ✅ NestJS Backend
│   └── Dockerfile
├── fbi-wanted-frontend/      ✅ Vite Frontend
│   └── Dockerfile
1. 🐳 Root docker-compose.yml
Save this in: fbi-wanted/docker-compose.yml

yaml
Copy
Edit
version: '3.8'

services:
  backend:
    container_name: fbi-backend
    build:
      context: ./fbi-wanted-api
      dockerfile: Dockerfile
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
      dockerfile: Dockerfile
    ports:
      - "5173:5173"
    volumes:
      - ./fbi-wanted-frontend:/app
      - /app/node_modules
    command: npm run dev
    environment:
      - NODE_ENV=development
2. 🐳 Backend Dockerfile
Save in: fbi-wanted-api/Dockerfile

Dockerfile
Copy
Edit
# Backend Dockerfile (NestJS)
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]
3. 🐳 Frontend Dockerfile
Save in: fbi-wanted-frontend/Dockerfile

Dockerfile
Copy
Edit
# Frontend Dockerfile (Vite + React)
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
✅ 4. Run the app
From the root directory (fbi-wanted/), run:

bash
Copy
Edit
docker-compose up --build
🔗 Access URLs
Frontend: http://localhost:5173

Backend: http://localhost:3000

