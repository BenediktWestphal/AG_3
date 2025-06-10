# Project Title (Replace with Actual Title)

This repository contains the source code for [Project Name]. It's structured as a monorepo with a separate frontend and backend.

## Project Structure

The project is organized into the following main directories:

-   **`frontend/`**: Contains the user interface of the application. This is likely a single-page application (SPA) built with a modern JavaScript framework (e.g., React, Vue, Angular).
    -   See `frontend/.env.example` for required environment variables.
-   **`backend/`**: Contains the server-side logic, APIs, and database interactions. This is likely a Node.js application (e.g., using Express.js).
    -   See `backend/.env.example` for required environment variables.
-   **`public/`**: Contains shared static assets that can be accessed directly via URL or used by both frontend and backend if necessary. This includes:
    -   `logos/`: For project logos.
    -   `qrcodes/`: For QR codes generated or used by the application.
    -   `audio/`: For any audio files.

## Configuration

### Environment Variables

Example environment variable files are provided:
-   Frontend: `frontend/.env.example`
-   Backend: `backend/.env.example`

Copy these files to `.env` in their respective directories and fill in the necessary values for local development. **Do not commit actual `.env` files to version control.**

### Deployment (Railway)

The `railway.json` file in the root directory contains configuration for deploying this project to [Railway](https://railway.app/). It specifies build commands and deployment settings.

## Running the Application

To run the application, you'll need to start both the backend and frontend servers separately.

### Backend (Node.js + Express)

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env` file from the example:**
    Copy `backend/.env.example` to `backend/.env`. You can modify the `PORT` if needed.
    ```bash
    cp .env.example .env
    ```
4.  **Start the backend server:**
    ```bash
    npm start
    ```
    The backend should now be running, typically on `http://localhost:3001` (or the port specified in your `.env` file). You can check its status by visiting `http://localhost:3001/api/health` in your browser or using a tool like curl.

### Frontend (Vite + React)

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env` file from the example:**
    Copy `frontend/.env.example` to `frontend/.env`.
    The `VITE_API_BASE_URL` in `frontend/.env.example` is set to `http://localhost:3000`. For development, if you want to rely *solely* on Vite's proxy (configured in `vite.config.js` for `/api` routes), you should ensure that your `App.jsx` makes requests to relative paths like `/api/health`. If `App.jsx` constructs full URLs using `VITE_API_BASE_URL`, then this variable should be set to the backend's address (e.g., `http://localhost:3001`). The current `App.jsx` uses `import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'`, so ensure your `.env` file reflects the correct backend URL.
    ```bash
    cp .env.example .env
    ```
    *Note: The `frontend/App.jsx` is currently configured to use `VITE_API_BASE_URL` (defaulting to `http://localhost:3001` if not set). The Vite proxy in `vite.config.js` is set up for requests to `/api`. If `VITE_API_BASE_URL` is set to `http://localhost:3001`, then requests like `fetch(\`\${apiUrl}/api/health\`)` will target `http://localhost:3001/api/health` directly, bypassing the Vite proxy. If you intend to use the Vite proxy, ensure `VITE_API_BASE_URL` is an empty string or `/` and that fetch requests in `App.jsx` are made to relative paths like `/api/health`.*
4.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    The frontend should now be running, typically on `http://localhost:5173` (Vite will indicate the port). Open this URL in your browser, and it should display a message fetched from the backend.

## Contributing

(To be added: Guidelines for contributing to the project.)

## License

(To be added: Specify the project license, e.g., MIT.)
