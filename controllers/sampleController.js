const sampleService = require("../services/sampleService");

exports.demo = async (req, res) => {
  try {
    await sampleService.demo(req, res);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
