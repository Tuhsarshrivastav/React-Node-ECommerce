import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";
import productRouter from './routers/productRouter.js';
const app = express();

const Connect = async () => {
  await mongoose.connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database is Connected");
};
Connect();



app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
