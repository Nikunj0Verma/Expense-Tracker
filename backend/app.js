const express = require("express");
const userRouter = require("./routes/userRouter");
const mongoose = require("mongoose");
const cors= require("cors");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();

mongoose
.connect("mongodb://localhost:27017/mern-expense")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

const corsOptions={
    origin: ['http://localhost:5175'],
};
app.use(cors(corsOptions));


app.use(express.json());
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
 