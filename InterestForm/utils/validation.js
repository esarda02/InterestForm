export const validateForm = (questions, formData) => {
  const errors = {};
  questions.forEach((question) => {
    if (question.required && !formData[question.label]) {
      errors[question.label] = `${question.label} is required`;
    }
  });
  return errors;
};
