const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/dbConnection");
const { registerApiRoutes } = require("./routes");
const PORT = process.env.PORT || 3003;
//Creating express server instance
const app = express();

//Register Global Middleware
app.use(express.json());
app.use(cors());

//Register API Routes
registerApiRoutes(app);

//Connect to MongoDB Database
connectToDatabase()
  .then(() => {})
  .catch((err) => {
    console.error("Error connecting to database:", err);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Health Check - Express JS Base App");
});
