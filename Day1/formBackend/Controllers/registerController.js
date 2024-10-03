import express from "express";
import User from "../Models/userModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    const user = new User({
        name,
        email,
        password
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


export default router;