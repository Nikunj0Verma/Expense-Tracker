const express = require("express");
const userRouter = require("./routes/userRouter");
const mongoose = require("mongoose");
const cors= require("cors");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();

mongoose
.connect("mongodb+srv://nik:tgko0025@cluster0.nwqqfj8.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

const corsOptions={
    origin: ['http://localhost:5173'],
};
app.use(cors(corsOptions));


app.use(express.json());
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
 