// Use es6 import style `import module from "path";`
// Node.js require is old school and will throw errors

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
const connectDB = require("./config/dbConn");
connectDB();
const registerRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use(
	cors({
		origin: " http://localhost:3000",
		credentials: true,
	}),
);
app.use(cookieParser());

app.use("api/auth", registerRoutes);

const PORT = 5000 || process.env.PORT;

// Make a function
// export const startServer = () => app.listen(port, callback);
// Import in the main.ts and call the function
app.listen(PORT, () => {
	console.log(`server is running on ${PORT}`);
});
