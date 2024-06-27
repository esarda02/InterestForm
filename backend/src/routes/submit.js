import express from 'express';
import FormSubmission from '../models/formSubmission.js';
import { validate } from '../utils/validate.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    // Validate data based on config
    validate(data);

    // Save the validated data
    const formSubmission = new FormSubmission({ data });
    await formSubmission.save();
    res.send('Form submitted successfully');
  } catch (error) {
    console.error('Error saving form submission:', error);
    res.status(400).send(`Error submitting form: ${error.message}`);
  }
});

export default router;
