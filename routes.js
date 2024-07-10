const sampleRoutes = require("./routes/sampleRoutes");

const registerApiRoutes = (app) => {
  app.use("/api", sampleRoutes);
};

module.exports = { registerApiRoutes };
