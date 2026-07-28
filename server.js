import express from "express"
import { handleDelete, handlePost, handlePut } from "./handlers/todohandeler.js"
import todoRouter from "./routes/todoroutes.js"
import bookRouter from "./routes/bookroutes.js"
import { loggerMiddlerware, xHeader } from "./handlers/middleware/middleware.js"


// express object
let myServer = express()
// accept json data in my server
myServer.use(express.json())
// 4 rule is used here
// using GET rule for path /my-first-server
myServer.get(
    "/my-first-server",

    // handler for function
    (req, res) => {
        res.send("My First server is Running successfully")

    }
)
// myServer.post("/todo/neww",
//     handlePost
// )
myServer.use("/todo",todoRouter)
myServer.get("/welcome",
    (req, res) => {
        res.json(
            {
                name: "comeback",
                message: "first server"
            }

        )
    }
)
myServer.get(
    "/std",
    (req, res) => {
        res.json({
            name: "Ram",
            id: "1",
            address: "Bhaktapur",
            course: "CSIT"
        })
    }
)
// using rule for get with PARAMS
// dynamic route using ":"
myServer.get("/greet/namee",
    (req, res) => {
        // getting request data from parameters
        let name = req.params.namee
        res.json({
            name: "Matina",
            greet_name: name,
            age: "19",
            message: "WELCOME TO SERVER"
        })
    }

)
// DAY2
// myServer.put(
//     "/todo", handlePut

// )
// global middleware
myServer.use(loggerMiddlerware)
myServer.use(xHeader)

myServer.use("/todo",todoRouter)
// delete
// myServer.delete("/todo/delete/:id",
//     handleDelete
// )

myServer.use("/todo",todoRouter)
// mid
// dlerware
myServer.use("/book",bookRouter)

// response middleware (below all routes)
myServer.use((data,req,res,next)=>{
    console.log("data from hanlder:",data)
    res.status(200).json({
       data,
       limit:{
        page:2,
        total:200,
       }
    })
})
// starting server
myServer.listen(3333,
    () => {
        // to chcek if server has started or not
        console.log("my server started at port 3333")
    }
)
