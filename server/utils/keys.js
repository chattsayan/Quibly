import dotenv from "dotenv";
dotenv.config();

if (process.env.NODE_ENV === "PRODUCTION") {
  // we are in production
} else {
  // we are in development
  process.env.NODE_ENV;
}
