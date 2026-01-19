import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  termsAccepted: {
    type: Boolean,
    required: true
  },
  createdAt: Date
});

export const Student = mongoose.model('Student', studentSchema);