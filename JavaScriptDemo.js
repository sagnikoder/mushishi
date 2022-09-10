const express = require('express')
const app = express()
const port = 3000

app.get('/community/tutorials', function(req, res) {
    res.sendFile('DemoWebPage.html', {root: __dirname })
});

app.get('/community/DemoStyling.css', function(req, res) {
  res.sendFile('DemoStyling.css', {root: __dirname })
});

// app.use(express.static('public'));

app.get('/imgone', function(req, res) {
  res.sendFile('public/background.jpg', {root: __dirname })
});
 
app.get('/imgtwo', function(req, res) {
  res.sendFile('public/mushishi logo.png', {root: __dirname })
});
 
app.get('/imgmid', function(req, res) {
  res.sendFile('public/Layer 4.png', {root: __dirname })
});
 
app.get('/imgright', function(req, res) {
  res.sendFile('public/Layer 1.png', {root: __dirname })
});
 
app.get('/imgrightmid', function(req, res) {
  res.sendFile('public/Layer 2.png', {root: __dirname })
});
 
app.get('/imgleft', function(req, res) {
  res.sendFile('public/Layer 3.png', {root: __dirname })
});
app.listen(port, () => {
  console.log(`Running server on PORT ${port}...`);
});



