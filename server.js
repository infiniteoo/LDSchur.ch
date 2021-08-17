const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

// define routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => console.log(`🚀 Server Live 🌎 @ port ${PORT}`));
