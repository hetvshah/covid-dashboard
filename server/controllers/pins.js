import Pins from '../models/pins.model.js';

export const getPins = async (req, res) => {
  try {
    const pins = await Pins.find();

    console.log(pins);

    res.status(200).json(pins);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPins = async (req, res) => {
  const pin = req.body;
  const newPin = new Pins(pin);
  try {
    await newPin.save();

    res.status(201).json(newPin);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
