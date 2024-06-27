import config from '../config/index.js';

export const validate = (data) => {
  for (const page of config.pages) {
    for (const question of page.questions) {
      const value = data[question.label];
      if (question.required && (value === undefined || value === null || value === '')) {
        throw new Error(`Field ${question.label} is required.`);
      }
      if (question.type === 'number' && typeof value !== 'number') {
        throw new Error(`Field ${question.label} must be a number.`);
      }
      if (question.type === 'select' && question.options && !question.options.includes(value)) {
        throw new Error(`Field ${question.label} must be one of ${question.options.join(', ')}.`);
      }
    }
  }
};
