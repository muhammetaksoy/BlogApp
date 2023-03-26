import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import blogRoutes from "./routes/blogs.js";
import categoryRoutes from "./routes/categories.js";
import commentRoutes from "./routes/comments.js";


const app=express();
dotenv.config();

app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        message:"happy coding with node.js"
    })
})

app.use("/blogs",blogRoutes);
app.use("/categories",categoryRoutes);
app.use("/comments",commentRoutes);

const PORT=process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Uygulama port: ${PORT} üzerinde ayakta...`);
    })

}).catch((err)=>{
    console.log(err.message);
})

