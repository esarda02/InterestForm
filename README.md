# Interest Form

## Project Overview

This project is a multi-page form application built using the MERN stack (MongoDB, Express.js, React Native, Node.js). It allows users to fill out forms with multiple pages, which are dynamically configured and validated.

## Project Structure

```
.
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   ├── constants.js
│   └── README.md
└── frontend/
    ├── src/
    ├── App.js
    ├── README.md
```

## Configuration File Format

The form configuration is stored in `backend/config/config.json`. This file defines the structure and content of the form pages. Find the details in `backend/README.md`

Only implemented text, select, number. Can do more in the frontend. Will need to add to the validation files if necessary.

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

2. **Start the Backend Server:**
   ```bash
   cd backend
   npm start
   ```

3. **Start the Frontend Application:**
   ```bash
   cd frontend
   npm start
   ```

**Note:**
You need to change the API_URL in `services/api.js`. You can use ifconfig.
Also need to change add to MONGO_URL in `backend/constants.js`.
