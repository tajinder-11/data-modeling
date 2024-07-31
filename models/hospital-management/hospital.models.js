import mongoose from 'mongoose';

const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: String,
    },
    addressLine2: {
      type: String,
      required: String,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specializedIn: [{ type: string }],
  },
  { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
