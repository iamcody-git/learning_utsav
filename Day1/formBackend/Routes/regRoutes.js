import express from 'express';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  res.json({ username, email, hashedPassword });
});
