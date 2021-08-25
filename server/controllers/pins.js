import User from '../models/user.model.js';
import mongoose from 'mongoose';

export const getPins = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    res.status(200).json(user.pins);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPins = async (req, res) => {
  const { id } = req.params;
  const pin = req.body;
  console.log(id);
  console.log(pin);
  const pinId = new mongoose.Types.ObjectId();
  const newPin = { ...pin, _id: pinId };
  try {
    await User.findByIdAndUpdate(
      id,
      { $push: { pins: newPin } },
      { new: true }
    );

    res.status(201).json(pin);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const deletePin = async (req, res) => {
  const { id, pin } = req.params;

  try {
    const user = await User.findById(id);
    console.log(user.pins);
    // await user.updateOne({ $pull: { pins: { _id: pin } } });
    // await user.pins.pull({ _id: pin });
    // await user.save();
    // await User.updateOne(
    //   { _id: id },
    //   { $pull: { pins: { _id: pin } } },
    //   { safe: true }
    // );

    // console.log(user.pins);
    // await user.updateOne({}, { $pull: { _id: pin } });
    // await user.pins.findByIdAndRemove(pin);
    // .pins.findByIdAndRemove(pin);
    user.pins.update(
      {},
      { $pull: { 'pins._id': new ObjectId(pin) } },
      function (err, val) {
        console.log(val);
      }
    );

    res.status(201).json();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
