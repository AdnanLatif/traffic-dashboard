# Traffic Dashboard

A web application to visualize country-wise traffic data and vehicle type distribution with interactive charts.

Built with **React (Vite)**, **Node.js (Express)**, **MySQL**, and **Sequelize**.

---

## 📂 Project Structure

```bash
traffic-dashboard/
├── client/        # React Vite frontend
├── server/        # Node.js Express backend
│   ├── controllers/
│   ├── models/
│   ├── migrations/
│   ├── seeders/
│   ├── routes/
│   ├── config/
│   ├── middlewares/
│   └── server.js
├── .env
├── README.md
├── docker-compose.yml (optional)
└── package.json
```

---

## ⚙️ Technologies Used

- Frontend: **React + Vite + Recharts + Axios**
- Backend: **Node.js + Express**
- Database: **MySQL**
- ORM: **Sequelize**
- Dev Server Proxy: **Vite Proxy** to avoid CORS
- Styling: **Simple Custom CSS**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/traffic-dashboard.git
cd traffic-dashboard
```

---

### 2. Setup Environment Variables

Create a `.env` file at the project root:

```env
DB_USERNAME=root
DB_PASSWORD=yourpassword
DB_NAME=traffic_db
DB_HOST=127.0.0.1
DB_DIALECT=mysql
```

---

### 3. Install Backend Dependencies

```bash
cd server
npm install
```

---

### 4. Setup MySQL Database

Make sure MySQL server is running.

Create a database manually if not exists:

```sql
CREATE DATABASE traffic_db;
```

---

### 5. Run Sequelize Migrations

```bash
npx sequelize-cli db:migrate
```

✅ This will create the necessary tables.

---

### 6. Seed the Database

```bash
npx sequelize-cli db:seed:all
```

✅ This will insert sample data into your tables.

---

### 7. Start Backend Server

```bash
npm start
```

or

```bash
node server.js
```

Server will run at:

**http://localhost:5000**

---

### 8. Install Frontend Dependencies

In a new terminal tab:

```bash
cd client
npm install
```

---

### 9. Start Frontend (Vite)

```bash
npm run dev
```

Frontend will run at:

**http://localhost:5173**

✅ Vite proxy will forward `/traffic` API calls to backend.

---

## 📊 Features

- Country-wise Traffic Chart:
  - Bar, Line, Pie toggle
- Vehicle Type Distribution Chart:
  - Bar, Line, Pie toggle
- Responsive Layout
- Error Handling with neat JSON responses
- Clean Project Structure (Controllers, Services, Routes)

---

## 📦 Useful Commands Summary

| Purpose                           | Command |
|-----------------------------------|---------|
| Install backend dependencies      | `cd server && npm install` |
| Run Sequelize migrations          | `npx sequelize-cli db:migrate` |
| Run Sequelize seeders             | `npx sequelize-cli db:seed:all` |
| Start backend server (dev)         | `npm run dev` |
| Install frontend dependencies     | `cd client && npm install` |
| Start frontend (Vite)              | `npm run dev` |
| Undo all migrations (optional)    | `npx sequelize-cli db:migrate:undo:all` |
| Undo all seeders (optional)        | `npx sequelize-cli db:seed:undo:all` |

---

## 📋 Scalability Plan
5 RPS to 50 RPS: Increase server resources (horizontal scaling), use proper connection pooling in MySQL.

50 RPS to 500 RPS: Add Load Balancer, Redis Caching for frequent queries, API rate limiting.

In production, use PM2 or Docker for clustering and process management.

---

## 🐳 Optional: Docker Setup (Not Implemented Yet)

> I will add Docker support later for full-stack containerization.
