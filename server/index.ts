import express, { Application } from 'express'

import { articleRoutes } from './routes';

import cors from "cors";

const app: Application = express();

const port: number = 3001;

app.use(cors());

app.use(express.json());

app.use("/api/articles", articleRoutes);

app.listen(port, () => {
  console.log(`App is listening on port ${port} !`)
});
