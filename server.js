const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");

const app = express();
//DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongoose DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongooseDB Connected"))
  .catch(err => console.log(err));
mongoose.set("useFindAndModify", false);

app.get("/", (req, res) => res.send("Hello Mr.Daraksa"));

//Use Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
