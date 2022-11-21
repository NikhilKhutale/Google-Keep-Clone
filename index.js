import express  from "express";
import cookieParser from "cookie-parser"
import notes from "./routes/notes.js"
import dotenv from "dotenv"
import path from "path"

dotenv.config();

//lets create our app
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/note",notes)

if(process.env.NODE_ENV=='production'){

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'client','build')))
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(process.env.PORT || 8800,()=>{
    console.log("connected")
})