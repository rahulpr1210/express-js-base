const demo = async (req, res) => {
  const payload = {
    ...req.body,
  };
  res.status(200).json(payload);
};

module.exports = {
  demo,
};
