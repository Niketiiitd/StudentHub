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
app.use("/api/posts", posts);
app.use("/api/users", users);
app.use("/api/comments", comments);
app.use("/api/messages", messages);

// For debugging build folder issues
const fs = require('fs');
const buildPath = path.resolve(__dirname, 'client', 'build');
const publicPath = path.resolve(__dirname, 'client', 'public');
const indexPathBuild = path.resolve(buildPath, 'index.html');
const indexPathPublic = path.resolve(publicPath, 'index.html');

console.log('Checking for build folder...');
console.log(`Build folder path: ${buildPath}`);
console.log(`Build folder exists: ${fs.existsSync(buildPath)}`);
console.log(`Public folder path: ${publicPath}`);
console.log(`Public folder exists: ${fs.existsSync(publicPath)}`);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // First check if build folder exists
  if (fs.existsSync(buildPath) && fs.existsSync(indexPathBuild)) {
    console.log("Using client/build folder");
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  } 
  // Fallback to public folder if build doesn't exist
  else if (fs.existsSync(publicPath) && fs.existsSync(indexPathPublic)) {
    console.log("Using client/public folder as fallback");
    app.use(express.static("client/public"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
    });
  } else {
    console.log("Neither build nor public folder found");
    app.get("*", (req, res) => {
      res.send("Error: Client build not found. Please check deployment logs.");
    });
  }
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}
