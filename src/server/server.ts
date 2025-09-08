import {config} 'dotenv';
import cookieParser from "cookie-parser";
import authRouter from "./Auth/routes/authRoutes.js";

export const configApp = (app) => {
	app.use(express.json());
	app.use(cookieParser());
	app.use("/api/auth", authRouter);
};
