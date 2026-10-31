import mongoose from "mongoose";

let cachedConnection = null;

export const connectDB = async () => {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }

  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn("⚠️ MONGO_URI not provided; database features will be inactive.");
    return null;
  }

  try {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    };
    cachedConnection = await mongoose.connect(uri, opts);
    console.log("MongoDB Connected:", cachedConnection.connection.host);
    return cachedConnection;
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    return null;
  }
};
