const express = require("express");
const userRouter = require("./routes/userRouter");
const mongoose = require("mongoose");
const cors= require("cors");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();
require('dotenv').config();

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

app.use(cors({
  origin: '*', // or use '*' for all origins (not recommended for production)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.use(express.json());
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
 