import mongoose from "mongoose";
import { StationSchema } from "./schema/StationSchema";
import * as dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";
let connection: typeof mongoose | null = null;
export const establishConnection = async () => {
  /**
   * create a .env file
   * add a MONGO_URI={connection string} env inside
   */
  connection = await mongoose.connect(MONGO_URI);
  return connection;
}

export const Station = mongoose.model('Station', StationSchema, 'station');