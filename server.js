const express = require('express');
const routes = require('./routes/routes');

const app = express();

const cors = require('cors');

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Your app is listening on port ' + port);
});
