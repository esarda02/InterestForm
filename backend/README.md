# Backend

## Overview

The backend is built with Express.js and MongoDB. It serves form configuration data and handles form submissions.

## Project Structure

```
backend/
├── config/
│   ├── config.json
│   └── index.js
├── models/
│   └── formSubmission.js
├── routes/
│   ├── config.js
│   ├── index.js
│   └── submit.js
├── services/
│   └── db.js
├── utils/
│   └── validate.js
├── app.js
├── constants.js
└── README.md
```

## Key Files

- **app.js:** Main entry point, sets up Express server and middleware.
- **constants.js:** Contains constants like MongoDB URL and server port.
- **config/config.json:** Contains form configuration data.
- **routes/index.js:** Aggregates all route modules.
- **routes/config.js:** Serves form configuration.
- **routes/submit.js:** Handles form submissions.
- **models/formSubmission.js:** Mongoose model for form submissions.
- **services/db.js:** Connects to MongoDB.
- **utils/validate.js:** Validates form data against configuration.

## API Endpoints

- **GET /config:** Returns the form configuration.
- **POST /submit:** Validates and saves form submission data.

## Configuration File Format

The form configuration is stored in `backend/config/config.json`. This file defines the structure and content of the form pages. Here is the format:

### Configuration Fields

- **timeout:** The timeout duration for the form in seconds.
- **pages:** An array of pages in the form.
  - **questions:** An array of questions on each page.
    - **label:** The label of the question.
    - **type:** The type of input (must be "text", "number", or "select").
    - **required:** Whether the question is required.
    - **options:** (Only for "select" type) An array of options for the select input.
    - **allowCustom:** (Optional, only for "select" type) Whether to allow custom input.

## Editing the Configuration File

To edit the form configuration:

1. Open `backend/config/config.json`.
2. Modify the `pages` array to add, remove, or change questions.
   - Ensure each question has a unique `label`.
   - Use valid `type` values: "text", "number", or "select".
   - For "select" type questions, update the `options` array as needed.
3. Save the changes.

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Server:**
   ```bash
   npm start
   ```

