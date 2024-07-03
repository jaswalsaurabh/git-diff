const express = require("express");
const cors = require("cors");
const { router } = require("./routes/routes");

const app = express();

const PORT = 3001;

app.use(cors());

app.use(router);

app.listen(PORT, () => {
  console.log("server started at port ", PORT);
});
