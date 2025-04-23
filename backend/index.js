import express from "express";
import { PORT, mongoDbUrl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/bookroutes.js";

const app = express();

//middleware for handling cors
//option 1 : allow all origin with default cors(*)
// app.use(cors());

//option 2 :allow custom origin
app.use(
  cors({
    origin: "http://localhost:5555",
    method: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("mern");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    app.listen(PORT, () => {
      console.log("App connected to DB");
      console.log(`server is listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
