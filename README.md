# Angular Signals — Learning Project

A beginner-friendly Angular 17+ project to learn **Signals**, **Computed**, and **Effect** through two practical examples.

---

## Features

### 🔢 Number Calculator
- Enter two numbers and select an operation
- Result updates **live** as you type — no button needed
- Supports: Add, Subtract, Multiply, Divide
- Handles division by zero gracefully

### 👤 Full Name Builder
- Enter first name, second name, and last name
- Full name updates **live** using a computed signal

### 🔍 Session Tracking with `effect()`
- Every signal change is compared against the previous value stored in `sessionStorage`
- Logs old → new value to the console on every change
- Simulates real-world audit logging and user behavior tracking

---
