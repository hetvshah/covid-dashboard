import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pinsSchema = new Schema({
  county: String,
  state: String,
  cases: Number,
  deaths: Number,
});

const Pins = mongoose.model('Pins', pinsSchema);

export default Pins;
