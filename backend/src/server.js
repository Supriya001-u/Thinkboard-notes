// import express from "express" / const express = require("express")

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config();



const app = express();
const PORT= process.env.PORT || 5002;




//middleware
app.use(cors({
    origin:"http://localhost:5173",
}));  // before anyother as we are trying to send the response so first we have to set the cors for cors error   

app.use(express.json()); // thiis middlware will parse JSN bodies: i.e. get access to req.body
app.use(rateLimiter);



// An endpoint - combination of a URL + HTTP method that lets the client interact with a specific resource. -> app.get("/api/notes")
// app.get("/api/notes", (req,res) => {
//     // send the notes
//     res.status(200).send("You got 15 notes");
// });

// app.post("/api/notes", (req,res) => {
//     res.status(201).json({message:"Post created succesfully!"});
// });

// app.put("/api/notes:id", (req,res) => {
//     res.status(200).json({message:"Note updated succesfully!"});
// });
// // http://localhost:5002/api/notes/21232333 --> send request to delete 21232333 id node 

// app.delete("/api/notes:id", (req,res) => {
//     res.status(200).json({message:"Note deleted succesfully!"});
// });


   




// Simple custom middleware
app.use((req,res,next) =>{
    console.log(`Req method is ${req.method} & Req URL is ${req.url} `);   // `` is used 
    next();

});


app.use("/api/notes",notesRoutes);
// app.use("/api/product",productRoutes);
// app.use("/api/post",productRoutes);
// app.use("/api/payment",productRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on PORT:",PORT);
    });

});





