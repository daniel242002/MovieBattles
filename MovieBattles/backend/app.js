import express from "express";
import cors from "cors";
import { UsersController } from "./controller/users.js";
import { PORT } from "../config.js";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/login", UsersController.login);

app.post("/register", UsersController.register);

app.post("/logout", (req, res) => {});
app.get("/protected", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
