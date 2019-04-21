const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const passport = require("passport");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// ===== Passport ====
app.use(passport.initialize());
app.use(passport.session()) // will call the deserializeUser

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/DB"
);
mongoose.connection.on('connected', function () {  
  console.log('Established mongoose default connection');
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
}); 

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
