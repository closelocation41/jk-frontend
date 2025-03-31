# JK Project Setup Guide

## Prerequisites
Before setting up the project, ensure the following prerequisites are met:

- Create a **Google Auth Client** and generate secret keys.
- Install [MongoDB](https://www.mongodb.com/try/download/community).
- Create a `.env` file and copy all data from `example.env`.
- Update AWS secrets.
- Update Google authentication keys.

---

## Local Setup

### Clone the repositories
```sh
git clone https://github.com/closelocation41/jk-backend.git

git clone https://github.com/closelocation41/jk-frontend.git
```

### 1) Local Setup Without Docker

#### Backend Setup (NestJS)
Navigate to the backend directory:
```sh
cd jk-backend
```
Install dependencies:
```sh
npm install
```
Create and configure `.env` file:
```sh
cp example.env .env
```
Start the development server:
```sh
npm run start:dev
```
Backend will be available at `http://localhost:3000`

#### Frontend Setup (Angular)
Navigate to the frontend directory:
```sh
cd ../jk-frontend
```
Install dependencies:
```sh
npm install
```
Start the development server:
```sh
npm run start
```
Frontend will be available at `http://localhost:4200`

Login with Google authentication.

---

### 2) Local Setup With Docker
Clone repositories:
```sh
git clone https://github.com/closelocation41/jk-backend.git

git clone https://github.com/closelocation41/jk-frontend.git

git clone https://github.com/closelocation41/jk-blog-app.git
```

Build the Docker images:
```sh
docker-compose build
```
Run Docker Compose:
```sh
docker-compose up -d
```
Ensure `docker-compose.yml` is correctly configured:
```sh
https://github.com/closelocation41/jk-blog-app
```

---

### 3) AWS ECR Setup

#### Create AWS ECR Repository
Create an ECR repository for `jk-backend` and `jk-frontend` in AWS.

#### Clone Repositories
```sh
git clone https://github.com/closelocation41/jk-backend.git

git clone https://github.com/closelocation41/jk-frontend.git

git clone https://github.com/closelocation41/jk-blog-app.git
```

#### Build and Push Images to AWS ECR
Build Docker images for `jk-backend` and `jk-frontend`, then push them to AWS ECR.

#### Setup EC2 Instance and Deploy GitHub Action Runner
- Create an **EC2 instance**.
- Deploy **self-hosted GitHub Action Runner**.
- Update **ECR repository URLs** in `docker-compose.yml`.
- Deploy GitHub workflow.

Create and configure `.env` file:
```sh
cp example.env .env
```

Now your project is set up for local development and AWS deployment! 🚀

