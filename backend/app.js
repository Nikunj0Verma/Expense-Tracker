const express = require("express");
const userRouter = require("./routes/userRouter");
const mongoose = require("mongoose");
const cors= require("cors");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();

const uri = "mongodb+srv://nik:tgko0025@cluster0.nwqqfj8.mongodb.net/?appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

// mongoose
// .connect("mongodb://localhost:27017/")
// .then(() => console.log("MongoDB connected"))
// .catch((err) => console.log(err));

// const corsOptions={
//     origin: ['http://localhost:5173'],
// };
// app.use(cors(corsOptions));


app.use(express.json());
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
 