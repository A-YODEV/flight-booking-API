const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const router = express.Router();
const routes = require("./routes/flightRoute");

const app = express();

app.use(json());

app.use("/flight", routes);

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Flight Booking API")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
