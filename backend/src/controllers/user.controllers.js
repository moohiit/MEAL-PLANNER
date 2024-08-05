import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log('UserData: ',req.body);
    
    //check user already exist
    const userExist = await User.findOne({ email });
    if (userExist) {
      console.log("User already exists");
      return res.status(400).json({ message: "User already exists" });
    }
    //Encrypt the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 12);
    //create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    //save the user in the mongoDB collection
    await user.save();
    console.log("User registered successfully");
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ message: "User not found" });
    } 

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("Message: User logged in successfully\n Token: ",token);
    res.status(200).json({ token:token,user:user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserDetails = async (req, res) => {
  try {
    if (!req.userId) {
      return res.send("Userid not Found.")
    }
    console.log('UserId: ', req.userId);
    const user = await User.findById(req.userId).select('-password');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const logoutUser = async (req, res) => {
  try {
    res.status(200).json({ message: "Logged out successfully" });
    console.log("Logged out successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getUserProfile = async (req, res) => {
  try {
    if (!req.userId) {
      return res.send("Userid not Found.");
    }
    console.log("UserId: ", req.userId);
    const user = await User.findById(req.userId).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserPreferences = async (req, res) => {
  const { dietaryPreferences } = req.body;
  const user = await User.findByIdAndUpdate(req.userId, { dietaryPreferences }, { new: true });
  res.json(user);
};

