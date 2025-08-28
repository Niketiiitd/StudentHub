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
    origin: ["http://localhost:3000", "https://post-it-heroku.herokuapp.com"],
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

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // Any route that is not an API route will be redirected to the index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// For debugging build folder issues
const fs = require('fs');
const buildPath = path.resolve(__dirname, 'client', 'build');
const indexPath = path.resolve(buildPath, 'index.html');

console.log('Checking for build folder...');
console.log(`Build folder path: ${buildPath}`);
console.log(`Build folder exists: ${fs.existsSync(buildPath)}`);
if (fs.existsSync(buildPath)) {
  console.log('Build folder contents:');
  console.log(fs.readdirSync(buildPath));
  console.log(`index.html exists: ${fs.existsSync(indexPath)}`);
}
