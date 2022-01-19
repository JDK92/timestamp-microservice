const getIndex = (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
};

const getDate = (req, res) => {
  const date = req.params.date;

  const utc = (!Date.parse(date)) 
              ? new Date(+date).toUTCString() 
              : new Date(date).toUTCString();

  if (!Date.parse(utc)) {
    return res.json({ error: "Invalid Date" });
  }

  res.json({ unix: Date.parse(utc), utc });
};


module.exports = {
  getIndex,
  getDate
}