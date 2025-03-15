const checkAuth = (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return res.status(401).json(null);
  }
  next();
};

module.exports = checkAuth;
