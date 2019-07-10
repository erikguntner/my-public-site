const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

app.get('/', () => console.log('yoooo'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.use('*', express.static('client/build')); // Added this

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Server Setup
const port = process.env.PORT || 3090;
app.listen(port, () => console.log(`listening on port ${port}`));
