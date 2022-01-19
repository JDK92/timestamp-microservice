const checkDate = (req, res, next) => {
  const date = req.params.date;

  if (!date) {
    return res.json({ unix: Date.now(),utc: new Date().toUTCString() });
  }

  next();
};


module.exports = {
  checkDate
};