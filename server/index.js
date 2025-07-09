import express from "express";
import dotenv from "dotenv";
import cookieSession from "cookie-session";
import passport from "passport";
import connectDB from "./config/database.js";
import "./services/passport.js";

// ----- ROUTES -----
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// ----- MIDDLEWARES -----
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);

const PORT = process.env.PORT || 5000;

// ----- CONNECT TO DATABASE -----
connectDB()
  .then(() => {
    console.log("✅ DB Connection Established...");

    // ----- LISTENING TO SERVER -----
    app.listen(process.env.PORT, () => {
      console.log(
        `🚀 Server is successfully listening to port ${PORT} in ${process.env.NODE_ENV} mode`
      );
    });
  })
  .catch((err) => {
    console.error("❌ DB Connection Failed: ", err);
  });
