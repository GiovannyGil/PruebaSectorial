import mongoose from "mongoose";
import dotenv from "dotenv";

// configurar variables de entorno
dotenv.config();

// Connect to the database
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/sectorial", {
        // useNewUrlParser: true, // nueva URL para el parser
        // useUnifiedTopology: true, // nuevo motor de monitorización del servidor
      });
      console.log('MongoDB connected');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1);
    }
}

export default connectDB;