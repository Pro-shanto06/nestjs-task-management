# NestJS Authentication and Task Management Service

## Overview

This project is a NestJS application providing authentication services using JWT and task management functionalities. It includes user registration, login, and task operations such as creation, retrieval, updating, and deletion.

## Features

- **Authentication**
  - User Registration: Sign up with a username and password.
  - User Login: Authenticate users and return a JWT access token.
  - Password Hashing: Securely hash passwords using `bcryptjs`.
  - JWT Authentication: Generate and verify JWT tokens for secure access.

- **Task Management**
  - Create Task: Create new tasks with title and description.
  - Retrieve Task: Get a task by ID.
  - Update Task Status: Update the status of an existing task.
  - Delete Task: Remove a task by ID.
  - List Tasks: Retrieve tasks with filtering options.

## Getting Started

### Prerequisites

- Node.js
- NestJS CLI
- PostgreSQL

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Pro-shanto06/nestjs-task-management
    cd nestjs-task-management
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Setup Environment Variables**

    Create a `.env` file in the root directory and add your environment variables. Example:

    ```env
    PORT=3000
    JWT_SECRET=your_jwt_secret
    ```

4. **Database Configuration**

    Configure your database. Example configuration for PostgreSQL:

    ```json
    {
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "your-username",
      "password": "your-password",
      "database": "your-database",
      "autoLoadEntities": true,
      "synchronize": true
    }
    ```

5. **Run the Application**

    ```bash
    npm run start
    ```

## Endpoints

### Authentication

#### Register a New User

- **Endpoint**: `POST /auth/signup`
- **Request Body**:

    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

- **Responses**:
  - `201 Created`: User successfully created.
  - `400 Bad Request`: Validation errors.

#### Log In

- **Endpoint**: `POST /auth/signin`
- **Request Body**:

    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

- **Responses**:
  - `200 OK`: Successful login, returns JWT token.
  - `401 Unauthorized`: Invalid credentials.

### Task Management

#### Create a Task

- **Endpoint**: `POST /tasks`
- **Request Body**:

    ```json
    {
      "title": "string",
      "description": "string"
    }
    ```

- **Responses**:
  - `201 Created`: Task successfully created.
  - `400 Bad Request`: Validation errors.

#### Retrieve a Task

- **Endpoint**: `GET /tasks/:id`
- **Responses**:
  - `200 OK`: Returns the requested task.
  - `404 Not Found`: Task not found.

#### Update Task Status

- **Endpoint**: `PATCH /tasks/:id/status`
- **Request Body**:

    ```json
    {
      "status": "OPEN|IN_PROGRESS|DONE"
    }
    ```

- **Responses**:
  - `200 OK`: Task status successfully updated.
  - `404 Not Found`: Task not found.

#### Delete a Task

- **Endpoint**: `DELETE /tasks/:id`
- **Responses**:
  - `204 No Content`: Task successfully deleted.
  - `404 Not Found`: Task not found.

#### List Tasks

- **Endpoint**: `GET /tasks`
- **Query Parameters**:
  - `status` (optional): Filter tasks by status.
  - `search` (optional): Search tasks by title or description.

- **Responses**:
  - `200 OK`: Returns a list of tasks based on filters.
