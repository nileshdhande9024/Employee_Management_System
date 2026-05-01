# Employee Management System

## Overview

The Employee Management System is a full-stack web application that streamlines employee data management and leave approval workflows within an organization. The system implements role-based access control, allowing employees and administrators to interact with the platform based on their responsibilities.

---

## Key Highlights

* Role-based system (Admin and Employee)
* Leave management workflow with approval process
* RESTful API integration between frontend and backend
* Scalable backend architecture using Spring Boot
* Responsive user interface using React

---

## Tech Stack

Frontend: React.js, Bootstrap

Backend: Spring Boot (Java)

Database: MySQL

Architecture: REST API

Deployment: AWS EC2

---

## System Modules

### Employee Module

* Secure login functionality
* View and manage personal profile
* Apply for leave requests
* Track leave status (Pending, Approved, Rejected)

### Admin Module

* Secure admin login
* Manage employee records (Create, Update, Delete)
* View all leave requests
* Approve or reject leave applications
* Monitor employee activity

---

## Workflow

1. Employee logs into the system
2. Employee submits a leave request
3. Request is stored in the database with "Pending" status
4. Admin reviews the request
5. Admin approves or rejects the request
6. Employee can view updated leave status

---

## Project Structure

```id="f76h8x"
employee-management-system/
│
├── frontend/        # React application
├── backend/         # Spring Boot REST API
└── README.md
```

---

## How to Run Locally

Backend:

```id="y9v3t9"
cd backend
mvn spring-boot:run
```

Frontend:

```id="3h4qdf"
cd frontend
npm install
npm start
```

---

## API Endpoint

```id="rff11p"
http://localhost:8090/
```

---

## Deployment

Frontend and Backend deployed on AWS EC2

---

## Future Enhancements

* JWT-based authentication and authorization
* Role-based access control improvements
* Email notifications for leave approval/rejection
* Dashboard analytics for admin
* Pagination and advanced filtering

---

## Author

Nilesh Dhande
GitHub: https://github.com/nileshdhande9024

---

## License

This project is developed for learning and demonstration purposes.
