const express = require("express");
const app = express() ; 
const dotenv = require("dotenv");
const notes = require("./data/notes");
app.get('/' , (req,res)=>{
    res.send("API is running");
});

const port = process.env.port || 5000 ;
app.get("/api/notes" , (req,res)=>{
    res.json(notes);
});
app.get("/api/notes/:id" , (req , res) =>{
    const note = notes.find((n) => n._id === req.params.id);
    console.log(req.params);
    res.send(note);
});
app.listen(port , console.log("Server is hearing you"));