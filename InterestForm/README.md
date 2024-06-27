# Frontend Documentation

## Overview

This project is a React Native application featuring a multi-page form submission flow. It uses React Navigation for navigation, Context for managing timeouts, and Axios for API calls. The form data is stored locally using AsyncStorage and submitted to a backend server.

## Project Structure

```
.
├── App.js
├── navigation/
│   └── AppNavigator.js
├── screens/
│   ├── FormPage.js
│   ├── LoadingScreen.js
│   └── ErrorScreen.js
├── components/
│   └── FormQuestion.js
├── context/
│   └── TimeoutContext.js
├── services/
│   └── api.js
└── utils/
    └── validation.js
```

## Code Documentation

### App.js

The root component of the application. It wraps the `AppNavigator` with a PaperProvider from `react-native-paper` for consistent styling across the app.

### navigation/AppNavigator.js

Sets up the navigation stack for the application.

- **State Management:**
  - `config`: Stores the configuration fetched from the API.
  - `loading`: Indicates whether the app is currently loading the config.
  - `error`: Stores any error encountered while fetching the config.
  
- **useEffect Hook:** Fetches the configuration data on component mount.

- **Conditional Rendering:**
  - Displays `LoadingScreen` while loading.
  - Displays `ErrorScreen` if there's an error.
  - Otherwise, sets up the navigation stack with pages based on the fetched configuration.

### screens/FormPage.js

Renders a form based on the configuration and handles form submission.

- **State Management:**
  - `formData`: Stores the form data.
  - `errors`: Stores form validation errors.

- **useEffect Hook:** Loads form data from AsyncStorage on component mount.

- **handleChange Function:** Updates form data and stores it in AsyncStorage.

- **handleSubmit Function:** Validates the form, navigates to the next page or submits the form data to the backend.

### screens/LoadingScreen.js

Displays a loading indicator while the app is fetching the configuration data.

### screens/ErrorScreen.js

Displays an error message if there's an error while fetching the configuration data.

### components/FormQuestion.js

A reusable component for rendering different types of form questions.

- **Props:**
  - `question`: The question configuration.
  - `value`: The current value of the question.
  - `onChange`: Function to call when the value changes.
  - `error`: Validation error for the question.

### context/TimeoutContext.js

Provides a context for managing timeouts in the form.

- **TimeoutProvider Component:** Wraps its children with a timeout context and resets the timeout on component mount and unmount.
- **useTimeout Hook:** Provides access to the timeout context.

### services/api.js

Defines the API service using Axios.

- **fetchConfig Function:** Fetches the configuration data from the backend.

### utils/validation.js

Contains utility functions for validating form data.

- **validateForm Function:** Validates the form data based on the provided questions configuration.

---

## Usage

### Running the Application

1. **Install Dependencies:**
   ```
   npm install
   ```

2. **Start the Application:**
   ```
   npm start
   ```

### Adding New Pages

1. **Update the Configuration:**
   - Add the new page details to the configuration returned by the backend.

2. **No Need for New Screen Components:**
   - The `AppNavigator` component dynamically handles the new pages based on the updated configuration.

### Customizing Form Questions

1. **Update the Configuration:**
   - Add or modify the questions in the configuration returned by the backend.

2. **Update the FormQuestion Component:**
   - If new question types are added, update the `FormQuestion` component to handle the new types.

---
