import express from "express";
import { prisma } from "@repo/db";

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const response = await prisma.user.findMany();
    res.status(200).json({ message: response });
    return;
  } catch (err) {
    res.status(500).json({ error: err });
    return;
  }
});

app.post("/user", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required" });
    return;
  }

  try {
    const result = await prisma.user.create({
      data: {
        username,
        password,
      },
    });
    res.status(201).json({ message: result });
    return;
  } catch (err: any) {
    res.status(500).json({ error: err.message });
    return;
  }
});

app.listen(8080, () => {
  console.log("Server is listening at 8080...");
});
