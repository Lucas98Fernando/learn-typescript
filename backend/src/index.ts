import express from "express";
import cors from "cors";
const app = express();
import routes from "./routes";

app.use(cors());

app.use(routes);

app.listen(3333);
