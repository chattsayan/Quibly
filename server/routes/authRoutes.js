import passport from "passport";

const authRoutes = (app) => {
  // Step 1: Redirect to Google
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  // Step 2: Callback handler
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      // Successful authentication, redirect or respond as needed
      res.send("✅ Google authentication successful");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.status(200).json({ user: req.user, message: "You have been logged out" });
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};

export default authRoutes;
