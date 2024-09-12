const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Import Sequelize models
const db = require("./models");
app.use(express.static('uploads'))

// Import routers for handling different routes
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter); // Route for posts
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter); // Route for comments
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter); // Route for user authentication

const likesRouter = require("./routes/Likes");
app.use("/like", likesRouter); // Route for Likes



// Sync Sequelize models with the database and start the server
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
