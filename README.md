# Patient Registration App

This is a patient registration application built using React and PGlite. It allows users to register new patient records, query existing records using raw SQL, and ensures data persistence and synchronization across multiple browser tabs.

## Live: [Click here](https://patient-registration-dun.vercel.app/)

## Features

* **Patient Registration:** Easily register new patients by providing their name, date of birth, and email.
* **Raw SQL Querying:** Execute custom SQL queries directly against the PGlite database and view the results.
* **Data Persistence:** All patient data is stored locally in the browser using PGlite's persistent storage (IndexedDB via Origin Private File System), ensuring data remains even after page refreshes.
* **Multi-tab Synchronization:** Changes made in one browser tab (e.g., registering a new patient) are automatically synchronized and reflected in other open tabs using the `BroadcastChannel` API.

## Technology Stack

* **React:** Frontend library for building the user interface.
* **Vite:** Fast build tool for React development.
* **PGlite:** A client-side PostgreSQL compatible database, running entirely in the browser. It handles data storage and SQL execution.
* **BroadcastChannel API:** Used for real-time communication and synchronization between different browser tabs/windows.

## Setup Instructions

Follow these steps to get the project up and running on your local machine:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/ritammaity55/patient-registration.git
    cd patient-registration
    ```

2.  **Install Dependencies:**
    Navigate into the project directory and install the required npm packages:
    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    Once dependencies are installed, you can start the development server:
    ```bash
    npm run dev
    ```
    This will typically open the application in your browser at `http://localhost:5173` (or another available port).

## Usage Instructions

1.  **Registering Patients:**
    * Use the "Register Patient" form at the top of the application.
    * Enter the patient's **Name**, **Date of Birth**, and **Email**.
    * Click the "Register Patient" button to add the record to the database.
    * The patient list (if implemented) or SQL query results will update accordingly.

2.  **Querying Records with Raw SQL:**
    * Use the SQL query interface (a `textarea` and "Execute" button).
    * Enter your SQL queries (e.g., `SELECT * FROM patients;`, `SELECT name, email FROM patients WHERE id = 1;`).
    * Click the "Execute" button to run the query.
    * Results will be displayed in a table below the query input.
    * Error messages will appear if the SQL query is invalid.

3.  **Multi-tab Synchronization:**
    * Open the application in multiple browser tabs (e.g., `http://localhost:5173` in two separate tabs).
    * Register a new patient in one tab.
    * Observe how the other tab automatically refreshes (reloads the page) to reflect the new data. This happens because of the `BroadcastChannel` mechanism.

## Deployment

This application is designed for easy deployment to platforms like Vercel or Netlify.

1.  **Push to a Git Repository:** Ensure your project is pushed to a public Git repository (GitHub, GitLab, Bitbucket).
2.  **Connect to Vercel/Netlify:**
    * Log in to your Vercel/Netlify account.
    * Create a new project and connect it to your Git repository.
    * The platforms will automatically detect it's a React project built with Vite and configure the build process.
    * Trigger a deployment.

## Challenges Faced During Development

* **Understanding PGlite Persistence:** Initial understanding of how PGlite manages persistent storage (IndexedDB/OPFS) and ensures data availability across browser sessions was a learning curve. Ensuring the `persistent: true` option was correctly set was crucial.
* **Multi-tab Synchronization (without full reload):** While `BroadcastChannel` effectively notifies other tabs, the chosen method `window.location.reload()` is a simple but sometimes jarring approach. A more sophisticated solution might involve state updates or data re-fetching without a full page refresh for a smoother user experience, which could be explored as a future enhancement.
* **Error Handling for Raw SQL:** Implementing robust error handling for arbitrary raw SQL queries to provide clear feedback to the user when an invalid query is executed.
* **Idempotent Database Schema Initialization:** Ensuring that the `CREATE TABLE IF NOT EXISTS` command runs safely on every application load across all tabs without causing issues.
