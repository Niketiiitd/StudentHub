const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const app = express();
const { authSocket, socketServer } = require("./socketServer");
const posts = require("./routes/posts");
const users = require("./routes/users");
const comments = require("./routes/comments");
const messages = require("./routes/messages");

dotenv.config();

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: [
      "http://localhost:3000", 
      "https://post-it-heroku.herokuapp.com",
      "https://studenthub-6on8.onrender.com"
    ],
  },
});

io.use(authSocket);
io.on("connection", (socket) => socketServer(socket));

// Update MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error: ", err));

httpServer.listen(process.env.PORT || 4000, () => {
  console.log("Listening");
});

app.use(express.json());
app.use(cors());

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Serve static files first
  app.use(express.static(path.join(__dirname, "client", "build")));

  // API routes
  app.use("/api/posts", posts);
  app.use("/api/users", users);
  app.use("/api/comments", comments);
  app.use("/api/messages", messages);

  // Catch-all: serve React for non-API routes
  app.get("*", (req, res) => {
    if (req.originalUrl.startsWith("/api/")) {
      res.status(404).send("API route not found");
    } else {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    }
  });
} else {
  // API routes
  app.use("/api/posts", posts);
  app.use("/api/users", users);
  app.use("/api/comments", comments);
  app.use("/api/messages", messages);

  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}
  