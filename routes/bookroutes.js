import { Router } from "express";
import { CreateBook, DeleteBook, filterbook, GetAllBooks, GetBookId, UpdateBook } from "../handlers/book_handeler.js";
import { xHeader } from "../handlers/middleware/middleware.js";
// import { loggerMiddlerware, xHeader } from "../middleware/middleware.js";

let bookRouter=Router()
bookRouter.get(
    "/all",GetAllBooks
)
bookRouter.get("/single/:id",GetBookId)
bookRouter.post("/create",
    xHeader,
    // loggerMiddlerware,
    CreateBook)
bookRouter.put("/update/:id",UpdateBook)
bookRouter.delete("/delete/:id",DeleteBook)
bookRouter.get("/filter",filterbook)
export default bookRouter