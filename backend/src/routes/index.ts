import express from "express"
import { todos} from "../db"

const router = express.Router()

router.get('/',(req,res)=>{
    res.send(todos)
})

router.post('/createTodo',(req,res)=>{
    const { title, description } = req.body
    const id = crypto.randomUUID()
    todos[id] = {
        title: title,
        description: description
    }
    res.status(201).send(todos)
})

router.delete('/:todoId', (req,res)=>{
    const {todoId}  = req.params 
    delete todos[todoId]
    res.status(200).send(todos)
})

router.put("/:todoId",(req,res)=>{
    const {todoId} = req.params;
    const {title} = req.body;
    const todo = todos[todoId]
    todos[todoId] = {title, description: todo.description}
})

export default router