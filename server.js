const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json({ extended: false }));

// define routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = process.env.PORT || 7777;

app.post("/api", (req, res) => {
  console.log("api route touched from client");
  res.json({ message: "hello, you've reached the api route." });
});

app.listen(PORT, () => console.log(`🚀 Server Live 🌎 @ port ${PORT}`));
