import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.model.js';

export const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  console.log(name);

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return rest.status(404).json({ message: 'User already exists.' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({ email, password: hashedPassword, name });

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
      expiresIn: '1h',
    });

    res.status(200).json({ result, token });
  } catch (err) {
    console.log(err);
    // res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return rest.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials.' });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      'test',
      {
        expiresIn: '1h',
      }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
