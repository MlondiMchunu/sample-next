import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { storeDocument } from "../mongoose/weather/services";

let mongoServer: MongoMemoryServer;

 export async function dbConnect() {
  try {
    // 1. Create in-memory MongoDB instance with proper options
    mongoServer = await MongoMemoryServer.create({
      instance: {
        port: 27017,       // Explicit port (optional)
        dbName: "Weather", // Default database name
        ip: '127.0.0.1',   // Bind to localhost
      },
      binary: {
        version: '6.0.8',  // Specify MongoDB version
      }
    });

    // 2. Get the connection URI
    const MONGO_URI = mongoServer.getUri();

    // 3. Configure Mongoose connection with proper timeout settings
    const mongooseOptions = {
      dbName: "Weather",
      serverSelectionTimeoutMS: 30000,  // 30 seconds for server selection
      socketTimeoutMS: 45000,           // 45 seconds for socket operations
      connectTimeoutMS: 30000,          // 30 seconds for initial connection
    };

    // 4. Connect Mongoose
    await mongoose.connect(MONGO_URI, mongooseOptions);

    // 5. Seed test data
    await seedTestData();

    return {
      uri: MONGO_URI,
      connection: mongoose.connection,
      mongoServer // Return server instance for cleanup
    };

  } catch (error) {
    console.error("Database connection error:", error);
    await dbDisconnect();
    throw error;
  }
}

async function seedTestData() {
  try {
    await storeDocument({
      zip: "96815",
      weather: "sunny",
      tempC: "25C",
      tempF: "70F",
      friends: ["96814", "96826"]
    });

    await storeDocument({
      zip: "96814",
      weather: "rainy",
      tempC: "20C",
      tempF: "68F",
      friends: ["96815", "96826"]
    });

    await storeDocument({
      zip: "96826",
      weather: "rainy",
      tempC: "30C",
      tempF: "86F",
      friends: ["96815", "96814"]
    });
  } catch (error) {
    console.error("Error seeding test data:", error);
    throw error;
  }
}

 export async function dbDisconnect() {
  try {
    await mongoose.disconnect();
    if (mongoServer) {
      await mongoServer.stop();
    }
  } catch (error) {
    console.error("Error during disconnection:", error);
  }
}

