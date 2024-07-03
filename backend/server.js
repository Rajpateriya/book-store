import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import db from "./config/db.config.js";
import bookRoutes from "./Routes/book.route.js"
const app = express();

app.use(express.json());

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Welcome to the book store system........********')
})
app.use('/book' , bookRoutes);
db();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at Port ${port}`);
});
