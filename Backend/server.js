const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", taskRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
