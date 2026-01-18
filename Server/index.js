import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./Routes/User.routes.js";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;
