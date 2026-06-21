const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/home", require("./routes/homeRoutes"));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});