import Pins from '../models/pins.model.js';
import User from '../models/user.model.js';

export const getPins = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    // console.log(user.pins);

    res.status(200).json(user.pins);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPins = async (req, res) => {
  const { id } = req.params;
  const pin = req.body;
  console.log(pin);
  // const newPin = { ...pin, _id: id }
  //   const newPin = new Pins(pin);
  try {
    // await newPin.save();
    await User.findByIdAndUpdate(id, { $push: { pins: pin } }, { new: true });

    // res.status(201).json(newPin);
    res.status(201).json(pin);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
