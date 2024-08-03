import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("MONGO_URI:", process.env.MONGO_URI); // Add this line for debugging

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
  app.use("/api/users", userRoutes);
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running  http://localhost:${PORT}`));
