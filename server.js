require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.set("trust proxy", 1);

const corsOptions = {
  origin: process.env.CLIENT_URL, 
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

connectDB();

app.use("/api/forms", require("./routes/formRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});