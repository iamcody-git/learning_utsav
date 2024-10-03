import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Hello from backend");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


