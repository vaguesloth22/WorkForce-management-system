# WorkForce-management-system

A client-side employee management system built with React and styled with Tailwind CSS. This application provides role-based access for Admins and Employees, allowing for simple task assignment and tracking. All data is managed locally within the browser using `localStorage`.

## Features

-   **Role-Based Authentication**: Simple login system for two user roles: Admin and Employee.
-   **Admin Dashboard**:
    -   View a comprehensive list of all employees.
    -   Monitor aggregate task counts (New, Active, Completed, Failed) for each employee.
    -   Create new tasks and assign them to specific employees.
-   **Employee Dashboard**:
    -   View a personalized dashboard with task statistics.
    -   See a list of all assigned tasks, categorized by status (New, Active, Completed, Failed).
-   **Local Data Persistence**: Uses the browser's `localStorage` to store and retrieve all application data, ensuring the state persists across sessions.
-   **Component-Based UI**: Built with reusable React components for a modular and maintainable codebase.

## Tech Stack

-   **Frontend**: React
-   **Styling**: Tailwind CSS
-   **State Management**: React Context API
-   **Build Tool**: Vite

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/WorkForce-management-system.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd WorkForce-management-system
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be running on `http://localhost:5173`.

## Login Credentials

Use the following credentials to test the application:

-   **Admin Login:**
    -   **Email:** `admin@me.com`
    -   **Password:** `123`

-   **Employee Login (Example):**
    -   **Email:** `e@e.com`
    -   **Password:** `123`

(Other employee credentials can be found in the `src/utils/localStorage.jsx` file.)
