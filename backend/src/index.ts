import express from "express"
import cors from "cors"
import todoRouter from "./routes/index"
const app = express()

app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.use('/',todoRouter)

app.listen(3001, ()=>{
    console.log("server listening on port 3001")
})