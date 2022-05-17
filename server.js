const express=require('express')
const app=express();
const mongoose=require('mongoose')
const bodyParse=require('body-parser')
app.use(bodyParse.urlencoded({extended:true}))
mongoose.connect("mongodb+srv://hazarisah:Hazari_12349@cluster0.1todg.mongodb.net/voicerecognizer",{useNewUrlParser:true},async ()=>{
    console.log("database is connected");
})
// create database schema 
const noteSchema={
    title:String,
    content:String
}
// create model
const Note=mongoose.model("Note", noteSchema)

app.get("/", async (req, res)=>{
res.sendFile(__dirname +"/index.html")
})

//post method
app.post("/", async(req,res)=>{
    let newNote=new Note({
        title: req.body.title ,
        content:req.body.content
    })
   await newNote.save()
   res.redirect("/")
})



app.listen(3000,()=>{
    console.log("server is running");
})