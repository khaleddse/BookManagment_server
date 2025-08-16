# Backend App

This is a Node.js backend application using Express and PostgreSQL. Docker Compose is used to run both the app and the database.

---

## 1. Setup

### 1.1 Create a `.env` file

Create a `.env` file in the project root with the following variables:

```env
# PostgreSQL configuration
POSTGRES_DB=<your_DataBase>
POSTGRES_USER=<db_user>
POSTGRES_PASSWORD=<password>
POSTGRES_PORT=<postgress_port>

# Application configuration
APP_PORT=
HOST_DB_PORT=
HOST_APP_PORT=
