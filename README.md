Employee Management System
Project Overview:
The Employee Management System is a full-stack web application designed to manage employees and organizational workflows. 
It includes role-based functionality where employees can apply for leave and administrators can review and approve or reject requests.

Tech Stack:
Frontend: React.js, Bootstrap
Backend: Spring Boot (Java)
Database: MySQL
API: RESTful APIs
Deployment: AWS EC2

Features:
Employee Module
Employee registration and login
View personal details
Apply for leave
Track leave status (pending, approved, rejected)
Admin Module
Admin login
View all employees
Manage employee records (add, update, delete)
View leave requests
Approve or reject leave applications

Project Structure:
employee-management-system/
│
├── frontend/        # React application
├── backend/         # Spring Boot application
└── README.md
How to Run Locally:
Backend (Spring Boot):
cd backend
mvn spring-boot:run

Frontend (React):
cd frontend
npm install
npm start
API Base URL
http://localhost:8080/

Backend and Frontend hosted on AWS EC2

Author:
Nilesh Dhande
GitHub: https://github.com/nileshdhande9024

License:
This project is open-source and available for learning purposes.
