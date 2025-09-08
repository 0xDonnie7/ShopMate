import express from "express";
import ViteExpress from "vite-express";
import { configApp } from "./server.js" ;
import { connectDB } from "./config/dbConn.js";

const app = express();
configApp(app);

ViteExpress.listen(app, 3000, async () => {
  await connectDB();
  console.log("Server is listening on port 3000...")
});
