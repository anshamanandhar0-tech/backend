let books=[
    {
        id:1,
        name:"math",
        price:24,
        author:"comeback man"
    },
        {
        id:2,
        name:"science",
        price:14,
        author:"comeback woman"
    }
]
export let GetAllBooks=(req,res,next)=>{
 next({
    message:"all books fetched successfully",
       data:books
    })
    // res.status(200).json({
    //     message:"all books fetched successfully",
    //     data:books
    // })
}
export let GetBookId=(req,res)=>{
    let id= req.params.id
    let matchedBook = books.find((ele)=>ele.id === Number(id) )
    res.status(200).json({
        message:`book with id ${id} fetched successfully`,
        data:matchedBook
    })
}
// create garda afai id banxa just name price chaiyo

export let CreateBook=(req,res)=>{
    let {name,price,author}=req.body
    let newBook ={
        id:books.length+1,
        name:name,
        price:price,
        author:author
    }
    books.push(newBook)
    res.status(200).json(
        {
            message:"book created successfully",
            data:newBook
        }
    )
}
export let UpdateBook=(req,res)=>{
    let id=req.params.id
    let{name,price,author}=req.body
    let oldbook = books.find((ele)=>ele.id=== Number(id))
    if(!oldbook){
 return res.status(404).json(
        {
            message:`book with id ${id} not found`,
            
        }
    )
    }
    // updating
    oldbook.name=name
    oldbook.price=price
    oldbook.author=author
    res.status(200).json({
        message:"book updated",
        data:oldbook
    })
   
}
// index find to delete
export let DeleteBook=(req,res)=>{
    let id=req.params.id
    let foubdbookindex = books.findIndex((ele)=>{
        return ele.id=== Number(id)
    })
    if(foubdbookindex<0)
    {
        return res.status(404).json({
            message:"book not found"
        })
    }
    // delete
    // splice take index and end index to delete
    books.splice(foubdbookindex,1)
    res.status(200).json({
        message:"book deleted succesfully",
        data:books
    })
}
export let filterbook= (req,res)=>{
    let queryparams=req.query
    let  name=queryparams.name
    let foundbooks= books.filter((ele)=>{
        return ele.name.include(name.toLowercase())
    })
    res.status(200).json({
        message:"books filtered successfully",
        data:foundbooks
    })
}