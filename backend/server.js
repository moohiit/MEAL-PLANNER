import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/mongoose.config.js";
import userRoutes from "./src/routes/user.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
