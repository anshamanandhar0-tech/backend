import router from "express"
import { handleDelete, handlePost, handlePut } from "../handlers/todo_handler.js"
 let todoRouter =router()
 todoRouter.delete(
    "/delete/:id",handleDelete
 )
todoRouter.put(
   "/modify/:id",handlePut
)
todoRouter.post(
   "/neww",handlePost
)
 export default todoRouter