import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      require: true,
      index: true,
      unique: true,
      sparse: true,
    },
    password: {
      type: String,
      require: true,
    },
    id: { type: String },
    pins: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
