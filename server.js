const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
  res.send("Hello, Back4App with Node.js & Docker!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
