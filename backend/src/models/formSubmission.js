import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const formSubmissionSchema = new Schema({
  data: { type: Schema.Types.Mixed, required: true }
}, { timestamps: true });

const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);

export default FormSubmission;
